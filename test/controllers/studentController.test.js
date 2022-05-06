const studentController = require ("./../../lib/controllers/studentController");

describe("Test Para Student Controller", () => {
    test("Test 1: Obtener a todos los estudiantes",()=>{
        const students =  studentController.getAllStudents();
        expect(students.length).toBe(51);  
    });
    test("test 2: Obtner el correo de estudiantes certificados",()=>{
        const studentsCertificated = studentController.getEmailStudentsCertificated();
        expect(studentsCertificated).toContain("Todd@visualpartnership.xyz");
    });
});