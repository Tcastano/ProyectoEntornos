const Operaciones = require ('./Operaciones')

describe("calculadora", ()=>{
    test("sumar", ()=>{
        expect(Operaciones.sumar(1,2)).toBe(3);
    });
});

describe("calculadora", ()=>{
    test("restar", ()=>{
        expect(Operaciones.restar(1,1)).toBe(0);
    });
});

describe("calculadora", ()=>{
    test("multiplicar", ()=>{
        expect(Operaciones.multiplicar(2,2)).toBe(4);
    });
});

describe("calculadora", ()=>{
    test("division", ()=>{
        expect(Operaciones.dividir(4,2)).toBe(2);
    });
});


