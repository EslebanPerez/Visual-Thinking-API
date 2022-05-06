const studentServices = require("../../lib/services/studentServices");

describe("Test para Student Services",() => {
    test("Test 1: Validar que la DB esta vácia", () =>{
        const studentproff = [];
        const getStudents = studentServices.getTotalStudents(studentproff);
        expect(getStudents).toBe("DB vácia");
    });
    test("Test 2: Prueba para obtener a todos los estudiantes", () =>{
        const studentproff = [
            {
                "id": "6264d5d89f1df827eb84bb23",
                "name": "Warren",
                "email": "Todd@visualpartnership.xyz",
                "credits": 508,
                "enrollments": [
                    "Visual Thinking Intermedio",
                    "Visual Thinking Avanzado"
                ],
                "previousCourses": 1,
                "haveCertification": true
            }, 
            {
                "id": "6264d5d85cf81c496446b67f",
                "name": "Lucinda",
                "email": "Sexton@visualpartnership.xyz",
                "credits": 677,
                "enrollments": [
                    "Visual Thinking Avanzado"
                ],
                "previousCourses": 6,
                "haveCertification": false
            },
            {
                "id": "6264d5d8cda17de0d2e9f236",
                "name": "Fuentes",
                "email": "Sharlene@visualpartnership.xyz",
                "credits": 210,
                "enrollments": [
                    "Visual Thinking Avanzado"
                ],
                "previousCourses": 10,
                "haveCertification": true
            }
        ];
        const getStudents = studentServices.getTotalStudents(studentproff);
        expect(getStudents.length).toBe(3);
    });
    test("Test 3: Prueba para obtener los email de estudiantes", () => {
        const studentproff = 
            {
                "id": "6264d5d89f1df827eb84bb23",
                "name": "Warren",
                "email": "Todd@visualpartnership.xyz",
                "credits": 508,
                "enrollments": [
                    "Visual Thinking Intermedio",
                    "Visual Thinking Avanzado"
                ],
                "previousCourses": 1,
                "haveCertification": true
            };
        const getEmail = studentServices.getStudentEmail(studentproff);
        expect(getEmail).toBe("Todd@visualpartnership.xyz");
    });
});
