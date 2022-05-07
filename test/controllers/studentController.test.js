const studentController = require ("./../../lib/controllers/studentController");

describe("Test Para Student Controller", () => {
    test("Test 1: Obtener a todos los estudiantes",()=>{
        const students =  studentController.getAllStudents();
        expect(students.length).toBe(51);  
    });
    test("Test 2: Obtener el correo de estudiantes certificados",()=>{
        const studentsCertificated = studentController.getEmailStudentsCertificated();
        expect(studentsCertificated).toContain("Todd@visualpartnership.xyz");
    });
    test ("Test 3: Obtener a los alumnos con creditos mayores a 500",()=>{
        const studentHighCredits = studentController.getstudentHighCredits(500);
        expect(studentHighCredits).toHaveLength(27);
    });
});