const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema(
  {
    sender: String,
    receiver: String,
    subject: String,
    name: String,
    company: String,
    email: {
      type: String,
      unique: true,
      sparse: true
    },
    requirement: String,
    priority: String
  },
  { timestamps: true }
);
const Email= mongoose.model("email", EmailSchema);
module.exports =Email;