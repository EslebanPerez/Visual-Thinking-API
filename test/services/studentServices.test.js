const studentServices = require("../../lib/services/studentServices");

describe("Test para Student Services",() => {
    test("Test 1: Validar que la DB esta vácia", () =>{
        const studentproff = [];
        const getStudents = studentServices.getTotalStudents(studentproff);
        expect(getStudents).toBe("DB vácia");
    });
});
