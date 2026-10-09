const { Schema, model } = require("mongoose");
const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  dob: {
    type: String,
    required: true,
  },
});

const StudentModel = model("Student", StudentSchema);
module.exports = StudentModel;
