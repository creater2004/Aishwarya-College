const express = require("express");
const StudentController = require("./controller/StudentController");
const PORT = 5000;

const app = express();
app.use(express.json());

let name = "Gaurav";
console.log("hello and welcome" + name);

app.listen(PORT, (req, res) => {
  console.log(`server is started on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/student", StudentController.create);
app.get("/student", StudentController.readAll);
app.get("/student/:id", StudentController.readOne);
app.put("/student/:id", StudentController.update);
app.delete("/student/:id", StudentController.destroy);
