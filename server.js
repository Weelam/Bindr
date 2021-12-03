"use strict";
require('dotenv').config()
const express = require("express");
const app = express();

// enable cors for dev
const cors = require('cors')
app.use(cors())

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");

// import the mongoose models
const { User } = require("./models/user");


// to validate object IDs
const { ObjectID } = require("mongodb");

// body-parser: middleware for parsing parts of the request into a usable object (onto req.body)
const bodyParser = require('body-parser') 
app.use(bodyParser.json()) // parsing JSON body
app.use(bodyParser.urlencoded({ extended: true })); // parsing URL-encoded form data (from form POST requests)

// express-session for managing user sessions
const session = require("express-session");
const MongoStore = require('connect-mongo') // to store session information on the database in production

const isMongoError = (error) => { // checks for first error returned by promise rejection if Mongo database suddently disconnects
    return typeof err
    or === 'object' && error !== null && error.name === "MongoNetworkError"
}
// middleware for checking mong oconnection
const mongoChecker = (req, res, next) => {
    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        console.log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    } else {
        next()  
    }   
}

/*** Session handling **************************************/
app.use(
    session({
        secret: process.env.SESSION_SECRET || "our hardcoded secret", // make a SESSION_SECRET environment variable when deploying (for example, on heroku)
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 300000,
            httpOnly: true
        },
        // store the sessions on the database in production
        store: MongoStore.create({mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/BindrAPI'})                     
    })
);
/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
