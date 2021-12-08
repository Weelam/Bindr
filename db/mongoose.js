require("dotenv").config();
const mongoose = require('mongoose')

/* Connnect to our database */
// Get the URI of the local database, or the one specified on deployment.
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/BindrAPI'

mongoose.connect(mongoURI);

module.exports = { mongoose }  