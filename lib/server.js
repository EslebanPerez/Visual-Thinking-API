const studentController = require("./controllers/studentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3001;

app.get("/", (request, response) => {
    response.json({message: "VisualPartners Api welcome!"});
});
app.get("/v1/students", (request, response) => {
    const AllStudents = studentController.getAllStudents();
    response.json(AllStudents);
});
app.get("/v1/students/certification/emails", (request, response) =>{
    const studentsCertificated = studentController.getStudentCertificated();
    response.json(studentsCertificated);
});
app.listen(port, () => {
    console.log(`VisualPartners API in localhost:${port}`);
});