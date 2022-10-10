
//WHILE ( ENQUANTO)

//contagem regressiva
var contador = 10;

while (contador > 0) {
    console.log('contagem regressiva...' + contador);
    contador = contador - 1;
}

console.log('BoOoOoOoOom!')

//questao: se for dividido por 2 some 5; caso nao subtraia 5.
var contador = 0;
var soma = 0;
var sub = 0;

while (contador < 10) {
    if (contador/2){
     soma = contador + 5;
    } else {
     sub = contador - 5;
    }
    contador = contador +1;
}

console.log(soma);
console.log(sub);

