const StudentModel = require("../models/StudentModel");

const StudentController = {
  create(req, res) {
    const body = req.body;
    StudentModel.create(body);
    res.send({
      message: "Succces! New Record Created",
      reqBody: body,
    });
  },
  async readAll(req, res) {
    const students = await StudentModel.find();
    res.send({
      message: "Succes! 46 record found",
    });
  },
  readOne(req, res) {
    res.send({
      message: "Succces! studend details found",
    });
  },
  update(req, res) {
    const params = req.params;
    const body = req.body;
    res.send({
      message: "Succces! Record has been updated",
    });
  },
  destroy(req, res) {
    res.send({
      message: "Succces! Record deleted",
    });
  },
};

module.exports = StudentController;
