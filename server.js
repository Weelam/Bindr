"use strict";
require("dotenv").config();
const env = process.env.NODE_ENV // read the environment variable (will be 'production' in production mode)

const express = require("express");
const app = express();

// build
const path = require('path');


// run 'morgan' middleware
const morgan = require("morgan");
app.use(morgan("combined"));

// get test user data
const { exampleUsers } = require("./exampleUser.js");
const {defaultModel} = require("./serverDefaultModel");

// enable cors for dev
const cors = require("cors");
if (env !== 'production') { app.use(cors()) }

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");

// import the mongoose models
const { User } = require("./models/user");
const { Group } = require("./models/group");
const { Report } = require("./models/report");

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
    profileImg: req.body.profileImg,
    groups: [],
    friends: [],
    wantToMatch: [],
    rejected: [],
    notifications: [],
  };

  const user = new User({
    username,
    password,
    profile,
  });

  try {
    // Save the user
    const newUser = await user.save();
    res.send({ message: "Account Created Successfully" });
  } catch (error) {
    if (isMongoError(error)) {
      // check for if mongo server suddenly disconnected before this request.
      res.status(500).send("Internal server error");
    } else {
      console.log(error);
      if (error.code === 11000) {
        res.status(400).send("Username already exists!");
      } // bad request for changing the student.
    }
  }
});

// login user
app.post("/users/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const user = await User.findByUsernamePassword(username, password);
    req.session.userID = user._id;
    req.session.username = user.username;
    console.log(req.session);
    res.send({ user: user });
  } catch (error) {
    console.log("bad username/password");
    res.status(400).send("bad username/password");
  }
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
  // console.log("/users/check-session", req.session.userID)
  if (req.session.userID) {
    res.send({ currentUser: req.session.username });
  } else {
    res.status(401).send();
  }
});

/*********************************************************/

/*** create test users  **************************************/

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

/*** Courses/Programs/Reports ************************************/

// get all courses
app.get("/api/courses", async (req, res) => {
  let courses = [];
  try {
    const users = await User.find();
    users.forEach(user => {
      courses = [...new Set([...courses, ...user.profile.courses])]
    })
    res.send({courses});
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
})

// get all programs
app.get("/api/programs", async (req, res) => {
  let programs = [];
  try {
    const users = await User.find();
    users.forEach(user => {
      programs = [...new Set([...programs, user.profile.program])]
    })
    res.send({programs});
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
})

// get all reports


/*** Users ************************************/

app.delete("/api/users/:userID", async (req, res) => {
  const userID = req.params.userID;

  try {
    const users = await User.findByIdAndDelete(userID);
    const updatedUsers = await User.find(); 
    res.send({updatedUsers});
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
})

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

// get the user object from userID
app.get("/api/usersID/:userID", async (req, res) => {
  const userID = req.params.userID;
  try {
    let user = await User.findById(userID);
    if (!user) {
      user = defaultModel
    }
    res.send({ user: user });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// for updating the user itself
app.put("/api/users/:username", async (req, res) => {
  const newUser = req.body.newUser;
  const username = req.params.username;

  try {
    let currentUser = await User.find({ username: username });
    // change profile stuff
    currentUser = currentUser[0];
    currentUser.profile = newUser.profile;
    // change username
    currentUser.username = newUser.username;
    await currentUser.save();
    res.send(currentUser);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

/*** Friends ************************************/

// get friends
app.get("/api/friends/:username", async (req, res) => {
  const username = req.params.username;
  try {
    let user = await User.find({ username: username });
    user = user[0];
    res.send({ friends: user.profile.friends });
  } catch (error) {
    console.log(error);
  }
});

// add 2 users as each others friends
app.put("/api/friends", async (req, res) => {
  const user1 = req.body.user1;
  const user2 = req.body.user2;

  console.log(user1, user2);

  try {
    let user1Doc = await User.findById(user1._id);
    let user2Doc = await User.findById(user2._id);
    user1Doc.profile.friends.push(user2._id);
    user2Doc.profile.friends.push(user1._id);
    await user1Doc.save();
    await user2Doc.save();

    res.send({ user1: user1Doc, user2: user2Doc });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

/*** Groups ************************************/
app.get("/api/groups/:username", async (req, res) => {
  const username = req.params.username;
  let groupsObj = [];
  try {
    let user = await User.find({ username: username });
    user = user[0];
    for (const groupID of user.profile.groups) {
      let group = await Group.findById(groupID);
      groupsObj.push(group);
    }
    // return a list of group objects (not just the id)
    res.send({ groupsObj });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/api/groups/:username", async (req, res) => {
  const newGroup = req.body.newGroup;
  const currentUser = req.params.username
  // create a new group object, save it, then use that objectID to update user.profile.groups
  const groupDoc = new Group({
    projectName: newGroup.projectName,
    members: newGroup.members,
    tasks: [],
    discussions: [],
  });

  try {
    await groupDoc.save();
    for (const userID of newGroup.members) {
      let user = await User.findById(userID);
      user.profile.groups.push(groupDoc._id);
      await user.save();
    }
    let updatedUser = await User.find({ username: currentUser });
    console.log(updatedUser)
    res.send({ updatedUser: updatedUser[0] });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

/*** Tasks ************************************/

// get all tasks for groupID
app.get("/api/task/:groupID", async (req, res) => {
  const groupID = req.params.groupID;

  try {
    let group = await Group.findById(groupID)
    res.send({ tasks: group.tasks });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// adding a task to groupID
app.post("/api/task/:groupID", async (req, res) => {
  const groupID = req.params.groupID;
  const newTask = req.body.newTask;

  try {
    let group = await Group.findById(groupID);
    group.tasks.push(newTask);
    await group.save();
    console.log(group);
    res.send({ group });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// updating a task with taskID
app.put("/api/task/:taskID", async (req, res) => {
  const taskID = req.params.taskID;
  const newTask = req.body.newTask;
  const groupID = req.body.groupID;

  try {
    let group = await Group.findById(groupID);
    let task = group.tasks.id(taskID)
    // update task
    task.users = newTask.users;
    task.deadline = newTask.deadline;
    task.desc = newTask.desc;
    task.completed = newTask.completed;
    task.name = newTask.name;
    task.comments = newTask.comments;
    // 
    await group.save()
    res.send({ tasks: group.tasks });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

/*** Notifications ************************************/

// for sending notficiations to users
app.put("/api/notification/send-notification", async (req, res) => {
  let notification = req.body.notification;
  const recipientID = notification.recipientID;

  try {
    let recipient = await User.findById(recipientID);
    recipient.profile.notifications.push(notification);
    await recipient.save();
    console.log("recipient: ", recipient);
    res.send(recipient);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// for removing notficiations to users
app.put("/api/notification/remove-notification", async (req, res) => {
  const notification = req.body.notification;
  const recipientID = notification.recipientID;
  try {
    let recipient = await User.findById(recipientID);
    recipient.profile.notifications.remove(notification);
    await recipient.save();
    console.log("recipient: ", recipient);
    res.send(recipient);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// get all notifications for a particular user
app.get("/api/notifications/:username", async (req, res) => {
  const username = req.params.username;

  try {
    let otherUser = await User.find({ username: username });
    otherUser = otherUser[0];
    res.send(otherUser.profile.notifications);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});
/*************************************************/

/*** Build ************************************/
app.use(express.static(path.join(__dirname, "/client/build")));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    // send index.html
    
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
