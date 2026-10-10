const express = require("express");
const mongoose = require("mongoose");
const StudentController = require("./controller/StudentController");
const PORT = 5000;

mongoose
  .connect(
    "mongodb+srv://Gaurav:2004@cluster20.bwhml.mongodb.net/StudentDB?appName=Cluster20",
  )
  .then(() => {
    console.log("MONGODB CONNECTED SUCCESFULLY");
  })
  .catch((err) => {
    console.log("MONGODB LCONNECTION ERROR", err);
  });

const app = express();
app.use(express.json());

app.listen(PORT, (req, res) => {
  console.log(`server is started on http://localhost:${PORT}`);
});

app.post("/student", StudentController.create);
app.get("/student", StudentController.readAll);
app.get("/student/:id", StudentController.readOne);
app.put("/student/:id", StudentController.update);
app.delete("/student/:id", StudentController.destroy);
