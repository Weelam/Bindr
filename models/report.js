const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  userID: "",
  content: ""
});

// make a model using the User schema
const Report = mongoose.model("Report", ReportSchema);
module.exports = { Report };


