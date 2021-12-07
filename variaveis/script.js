/* // Declare uma variável contendo uma string
var nome = "Brasil!";

// Declare uma variável contendo um número dentro de uma string
var numString = "55";

// Declare uma variável com a sua idade
var idade = 27;

console.log(typeof numString);
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var myName = "Fernando";
var myLastName = "Cavalcanti";

console.log(`Meu nome é ${myName} ${myLastName}`);
// Coloque a seguinte frase em uma variável: It's time
var phrase = "It's time";

console.log(phrase);
// Verifique o tipo da variável que contém o seu nome
var testString = typeof myName;

console.log(testString);
 */


/* 
// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;

console.log(total);
// Crie duas expressões que retornem NaN
var fraseNaN = "20s";
var phrase = fraseNaN / 2;

console.log(phrase);
console.log(isNaN(phrase));
// Somar a string '200' com o número 50 e retornar 250
var stringFrase = +'200';
// +stringFrase; 

var total2 = stringFrase + 50;

console.log(total2);
// Incremente o número 5 e retorne o seu valor incrementado
var increment = 5;

console.log(++increment);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'

+numero;

var pesoPorDois = numero / 2; // NaN (Not a Number)

console.log(pesoPorDois);
 */


/* 
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var w = 27;
var x = 30;

if (w > x){
  console.log('É maior (mais velho)');
} else if (w === x){
  console.log('É Igual (a idade)');
} else {
  console.log('É menor (a idade)');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

console.log(expressao);
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207; 
var china = 1340;

if(brasil === china){
  console.log('Ambos são iguais');
} else if(brasil > china){
  console.log(`O Brasil é maior com ${brasil}`);
} else {
  console.log(`A China é maior com ${china}`);
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
} */
/* 
//Parâmetro
function areaQuadrada(lado){
  return lado * lado;
}

//console.log(areaQuadrada(2));

function imc(peso, altura){
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.8)); //Argumento 


function corFavorita(cor){
  if(cor === 'azul'){
    return 'deu azul'
  } else if (cor === 'verde'){
    return 'deu verde'
  } else {
    return 'deu qualquer cor'
  }
}

addEventListener('click', function(){ console.log('oi!')}) */

