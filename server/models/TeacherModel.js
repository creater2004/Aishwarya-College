const { Schema, model } = require("mongoose");
const TeacherSchema = new Schema({
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

const TeacherModel = model("Teacher", TeacherSchema);
module.exports = TeacherModel;
