class Pantalla{
    constructor(mostrarPorPantalla){
        this.mostrarPorPantalla = mostrarPorPantalla;
        this.calculadora = new Operaciones();
        this.valorActual = valorActual;
        this.valorAnterior = valorAnterior;
    }

    agregarNumero(numero){
        this.valorActual = numero;
    }
}