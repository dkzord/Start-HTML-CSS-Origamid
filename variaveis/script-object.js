// Array
/* 
var variedade = ['Switch', 'Xbox', 'PS4', '3DS'];
var frutas = ['Banana', 'Pera','Maçã', 'Abacaxi','Uva'];

// for (let i = 0; i < variedade.length; i++) {
//   console.log(variedade[i]);
// }

frutas.forEach( function(item, index) {
  console.log(item, index);
}); 

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copaBrasil = ['1959', '1960', '1970', '1994', '2002'];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
copaBrasil.forEach(function(yearWinCopa) {
  console.log(`O Brasil ganhou a copa de ${yearWinCopa}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for(let count = 0; count < frutas.length; count++){
  console.log(`${frutas[count]}`)
  if(frutas[count] === 'Pera'){
    break;
  }
}

/* // Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var lastFruit = frutas[frutas.length - 1];

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito = (possuiCarro && possuiCasa);

console.log(darCredito); */




// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo?
const dois = 2;

function somarDois(x) {
  return x + dois;
}

function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
