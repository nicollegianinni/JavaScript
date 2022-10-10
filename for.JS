
//LAÇO REPETIÇÃO - FOR (PARA)

//mostrará de 0 a 100 em sequencia
for (i=0;i<=100;i++){
    console.log (i);
}

//mostrará numeros da tabuada 
var numero = 5;
console.log ('Tabuada do ' + numero);

for (var i=0;i<=10;i++){
    console.log (numero + ' x ' + i + ' = ' + numero * i);
}


//LAÇO REPETIÇÃO - FOR - IF - ELSE
console.log (' FOR - IF ')
var numeroSorteado = 28;

for (var i = 0; i <=100; i++){
    if (numeroSorteado === i){
        console.log('Seu numero foi encontrado! seu numero foi o ' + i + '!' );
    }else {
        console.log('O numero ' + i + ' NÃO foi sorteado!' );
    }
}