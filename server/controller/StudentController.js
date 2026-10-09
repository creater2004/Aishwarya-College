const StudentModel = require("../models/StudentModel");

const StudentController = {
  async create(req, res) {
    try {
      const student = await StudentModel.create(req.body);
      res.status(201).send({
        message: "Student created",
        data: student,
      });
    } catch (error) {
      sendError(res, "create student", error);
    }
  },
  async readAll(req, res) {
    try {
      const student = await StudentModel.find();
      res.send({
        message: "All Student Records",
        data: student,
      });
    } catch (error) {
      sendError(res, "read students", error);
    }
  },
  async readOne(req, res) {
    try {
      const student = await StudentModel.findById(req.params.id);
      if (!student) {
        return res.status(404).send({ message: "Student not found" });
      }
      res.send({
        message: "Student found",
        data: student,
      });
    } catch (error) {
      sendError(res, "read student", error);
    }
  },
  async update(req, res) {
    try {
      const student = await StudentModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true },
      );
      if (!student) {
        return res.status(404).send({ message: "Student not found" });
      }
      res.send({
        message: "Student updated",
        data: student,
      });
    } catch (error) {
      sendError(res, "update student", error);
    }
  },
  async destroy(req, res) {
    try {
      const student = await StudentModel.findByIdAndDelete(req.params.id);
      if (!student) {
        return res.status(404).send({ message: "Student not found" });
      }
      res.send({
        message: "Student deleted",
        data: student,
      });
    } catch (error) {
      sendError(res, "delete student", error);
    }
  },
};

module.exports = StudentController;
