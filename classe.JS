// classe

class Matematica {

    soma (valor1, valor2){
        return valor1 + valor2;
    }

    subtracao ( valor1,valor2){
        return valor1 - valor2;
    }
}

var instanciaMatematica = new Matematica();

var resultadoSoma = instanciaMatematica.soma(5,2);
var resultadoSub = instanciaMatematica.subtracao(5,2);

console.log (resultadoSoma);
console.log (resultadoSub);




