const studentServices = require("../services/studentServices");
const Reader = require("../utils/Reader");

class studentController{
    static getAllStudents(){
        const students = Reader.readJsonFile("visualpartners.json");
        return studentServices.getTotalStudents(students);
    }
    static getEmailStudentsCertificated(){
        const students = Reader.readJsonFile("visualpartners.json");
        return studentServices.studentHaveCertification(students);
    }
    static getstudentHighCredits(credits){
        const students = Reader.readJsonFile("visualpartners.json");
        return studentServices.studentCredits(students,credits);
    }
}

module.exports = studentController;