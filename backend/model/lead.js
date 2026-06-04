const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: String,
    company: String,
    email: {
      type: String,
      unique: true
    },
    requirement: String,
    priority: String
  },
  { timestamps: true }
);
const Lead = mongoose.model("Lead", leadSchema);
module.exports =Lead;