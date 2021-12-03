"use strict";
require("dotenv").config();

const express = require("express");
const app = express();

// run 'morgan' middleware
const morgan = require("morgan");
app.use(morgan("combined"));

// get test user data
const { exampleUsers } = require("./exampleUser.js");

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

function isMongoError(error) {
  // checks for first error returned by promise rejection if Mongo database suddently disconnects
  return (
    typeof error === "object" &&
    error !== null &&
    error.name === "MongoNetworkError"
  );
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

// sign up user
app.post("/users/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const profile = {
    role: "user",
    name: req.body.name,
    year: req.body.year,
    courses: [],
    program: req.body.program,
    bio: "",
    profileImg: "",
    groups: [],
    friends: [],
    wantToMatch: [],
    rejected: [],
    notifications: [],
  };

  const user = new User({
    username, password, profile
  })

  try {
    // Save the user
    const newUser = await user.save();
    res.send({message: "Account Created Successfully"});
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

// login user
app.post("/users/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await User.findByUsernamePassword(username, password).catch(
    (e) => res.status(400).send("bad username/password")
  );
  req.session.user = user._id;
  req.session.username = user.username;
  res.send({ currentUser: user.username });
});

// logout user
app.get("/users/logout", (req, res) => {
  // Remove the session
  req.session.destroy((error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send();
    }
  });
});

// check if user is authenticated
app.get("/users/check-session", (req, res) => {
  if (req.session.user) {
    res.send({ currentUser: req.session.email });
  } else {
    res.status(401).send();
  }
});

/*********************************************************/

/*** create test users  **************************************/

// create a new user (for testing only)
app.post("/api/users", mongoChecker, async (req, res) => {
  // create a new user
  const username = req.body.username;
  const password = req.body.password;
  const profile = req.body.profile;
  const user = new User({
    username: username,
    password: password,
    profile: profile,
  });
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

// load test users
app.post("/testUsers", async (req, res) => {
  exampleUsers.forEach(async (user) => {
    const username = user.username;
    const password = user.password;
    const profile = user.profile;

    const userDoc = new User({
      username: username,
      password: password,
      profile: profile,
    });

    try {
      // Save the user
      const newUser = await userDoc.save();
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
  res.send("successfully added all students");
});

/*********************************************************/

/*** API Routes below ************************************/
// User API route
// {
// 	username, password, profiledetails (object)
// }

// get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// get the user object from username
app.get("/api/users/:username", async (req, res) => {
  const username = req.params.username;
  try {
    const currentUser = await User.find({ username: username });
    res.send({ currentUser: currentUser[0] });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});
/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
