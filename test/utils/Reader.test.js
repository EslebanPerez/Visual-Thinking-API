const Reader = require("./../../lib/utils/Reader");

describe("Test for ExplorerService", () => {
    test("Test 1: Verificando que la base de datos no este vacía ", () =>{
        const students = Reader.readJsonFile("visualpartners1.json"); 
        expect(students).not.toBeUndefined();
    });
    test("Test 2: Verificar el número de students en la BD ", () =>{
        const students = Reader.readJsonFile("visualpartners.json"); 
        expect(students.length).toBe(51);
    });
});