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

/* function terceiraIdade(idade){
  if (typeof idade !== 'number'){
    return 'Informa um número valido!';
  } else if ( idade >= 60 ){
    return 'Tem 60 ou mais anos!';
  } else {
    return `Tem apenas ${idade} anos`;
  }
}

console.log(terceiraIdade(75)); */

// Exercícios Funções
/* 
// Crie uma função para verificar se um valor é Truthy
function valorPositivo(valor){
  return !!valor;
}

console.log(valorPositivo(5));
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado){
  return lado * 4;
}

console.log(perimetroQuadrado(5))
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(firstName, lastName) {
  return `Seu nome é ${firstName} ${lastName}`;
}

console.log(nomeCompleto('Fernando', 'Cavalcanti'));
// Crie uma função que verifica se um número é par
function numeroPar(number){
  if(typeof number !== 'number'){
    return 'Coloque um número valido!';
  } else if(( number % 2 ) == 0){
    return `O número ${number} é par!`;
  } else {
    return `O número ${number} é impar!`;
  }
}

console.log(numeroPar(3));
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado){
  return typeof dado;
}

console.log(tipoDado('pao'));
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function() { console.log('Fernando Cavalcanti')})

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
 */

// Exercícios Objetos

/* 
var pessoa = {
  nome: 'Fernando',
  sobrenome: 'Cavalcanti ',
  idade: 27,
}

console.log(pessoa.nome)

var quadrado = {
  lados: 4,
  area: function(lado){
    return lado * lado;
  },
  parametro: function(lado){
    return this.lados * lado;
  }
}

console.log(quadrado.parametro(5));

console.table(quadrado); */


// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: 'Fernando',
  sobrenome: 'Cavalcanti',
  idade: '27',
  nomeCompleto: function (){
    return `Meu nome é ${this.nome} ${this.sobrenome}`;
  },
}

console.log(dadosPessoais.nome);
// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(dadosPessoais.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa){
    if(pessoa === 'homem'){
      return 'Au aua auuuuuauuu';
    } else {
      return 'hmmmm...';
    }
  },
}

console.log(cachorro.latir('homem'));

