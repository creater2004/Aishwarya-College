const StudentController = {
  create(req, res) {
    res.send({
      message: "Succces! New Record Created",
    });
  },
  readAll(req, res) {
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
