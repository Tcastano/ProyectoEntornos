class Operaciones{

    sumar(numero1, numero2){
        return numero1 + numero2;
    }
    restar(numero1, numero2){
        return numero1 - numero2;
    }
    multiplicar(numero1, numero2){
        return numero1 * numero2;
    }
    dividir(numero1, numero2){
        return numero1 / numero2;
    }
    raiz(numero1, numero2){
        return Math.pow(numero1,1/numero2);
    }
    potencia(numero1, numero2){
        return Math.pow(numero1, numero2);
    }
}
module.exports = new Operaciones;