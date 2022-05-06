const studentServices = require("../services/studentServices");
const Reader = require("../utils/Reader");

class studentController{
    static getAllStudents(){
        const students = Reader.readJsonFile("visualpartners.json");
        return studentServices.getTotalStudents(students);
    }
}

module.exports = studentController;