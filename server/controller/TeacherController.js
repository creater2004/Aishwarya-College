const TeacherModel = require("../models/TeacherModel");
const TeacherController = {
  async create(req, res) {
    try {
      const Teacher = await TeacherModel.create(req.body);
      res.status(201).send({
        message: "Teacher created",
        data: Teacher,
      });
    } catch (error) {
      sendError(res, "create Teacher", error);
    }
  },
  async readAll(req, res) {
    try {
      const Teacher = await TeacherModel.find();
      res.send({
        message: "All Teacher Records",
        data: Teacher,
      });
    } catch (error) {
      sendError(res, "read Teachers", error);
    }
  },
  async readOne(req, res) {
    try {
      const Teacher = await TeacherModel.findById(req.params.id);
      if (!Teacher) {
        return res.status(404).send({ message: "Teacher not found" });
      }
      res.send({
        message: "Teacher found",
        data: Teacher,
      });
    } catch (error) {
      sendError(res, "read Teacher", error);
    }
  },
  async update(req, res) {
    try {
      const Teacher = await TeacherModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true },
      );
      if (!Teacher) {
        return res.status(404).send({ message: "Teacher not found" });
      }
      res.send({
        message: "Teacher updated",
        data: Teacher,
      });
    } catch (error) {
      sendError(res, "update Teacher", error);
    }
  },
  async destroy(req, res) {
    try {
      const Teacher = await TeacherModel.findByIdAndDelete(req.params.id);
      if (!Teacher) {
        return res.status(404).send({ message: "Teacher not found" });
      }
      res.send({
        message: "Teacher deleted",
        data: Teacher,
      });
    } catch (error) {
      sendError(res, "delete Teacher", error);
    }
  },
};

module.exports = TeacherController;
