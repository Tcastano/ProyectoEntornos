const Operaciones = require ("./Operaciones")

describe("calculadora", ()=>{
    test("sumar", ()=>{
        expect(Operaciones.sumar(1, 2)).toBe(3);
    });
});

