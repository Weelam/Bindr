"use strict";
require("dotenv").config();
const express = require("express");
const app = express();

/* Server environment setup */
// To run in development mode, run normally: node server.js
// To run in development with the test user logged in the backend, run: TEST_USER_ON=true node server.js
// To run in production mode, run in terminal: NODE_ENV=production node server.js
// test user stuff
const env = process.env.NODE_ENV; // read the environment variable (will be 'production' in production mode)

// enable cors for dev
const cors = require("cors");
app.use(cors());

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");

// import the mongoose models
const { User } = require("./models/user");

// to validate object IDs
const { ObjectID } = require("mongodb");

// body-parser: middleware for parsing parts of the request into a usable object (onto req.body)
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // parsing JSON body
app.use(bodyParser.urlencoded({ extended: true })); // parsing URL-encoded form data (from form POST requests)

// express-session for managing user sessions
const session = require("express-session");
const MongoStore = require("connect-mongo"); // to store session information on the database in production
const { object } = require("webidl-conversions");

function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
	return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
}

// middleware for checking mong oconnection
const mongoChecker = (req, res, next) => {
  // check mongoose connection established.
  if (mongoose.connection.readyState != 1) {
    console.log("Issue with mongoose connection");
    res.status(500).send("Internal server error");
    return;
  } else {
    next();
  }
};

/*** Session handling **************************************/
app.use(
  session({
    secret: process.env.SESSION_SECRET || "our hardcoded secret", // make a SESSION_SECRET environment variable when deploying (for example, on heroku)
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 300000,
      httpOnly: true,
    },
    // store the sessions on the database in production
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI || "mongodb://localhost:27017/BindrAPI",
    }),
  })
);

// login user 
app.post("/users/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
	console.log(req.session)
	const user = await User.findByUsernamePassword(username, password).catch(e => res.status(400).send("bad username/password"))

	req.session.user = user._id;
	req.session.username = user.username;
	res.send({current_user: user.username})
});

/*********************************************************/

/*** API Routes below ************************************/
// User API route
// {
// 	username, password, profiledetails (object)
// }

app.post("/api/users", mongoChecker, async (req, res) => {
	// create a new user
  const username = req.body.username;
  const password = req.body.password;
  const profile = req.body.profile;

	const userObject = {username, password, profile}


  const user = new User({
    username: username,
    password: password,
    profile: profile
  });

	console.log(userObject);

  try {
    // Save the user
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    if (isMongoError(error)) {
      // check for if mongo server suddenly disconnected before this request.
      res.status(500).send("Internal server error");
    } else {
      console.log(error);
      res.status(400).send("Bad Request"); // bad request for changing the student.
    }
  }
});

/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
