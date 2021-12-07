/* Serve para abri um dialog */
/* alert('Olá, seja bem vindo ao curso!') */

/* 
    Selecionar elementos do DOM
    atualizar o valor desse elemento com uma string
*/

/* document.getElementById('nome').value = 'Oi' */


/* String 
----------------*/
/* var texto = "Curso de JavaScript" */


/* Number
--------------- */
/* var numeroInteiro = -7
var numeroFracionario = 10.75
 */
/* Boolean
---------------- */
//var teste = true //true or false 

//document.write(texto)

//console.log(numeroInteiro)

/* 
var nome = prompt('Digite o seu nomer: ')
var idade = prompt('Digite a sua idade: ')
var idade2 = 50

console.log(idade)
console.log(idade2)

document.write('<h1>Olá, ' + nome + ' tudo bem? Eu estou vendo aqui que você possui ' + idade + ' anos</h1>')

 */

//null 
/* var test = null; */

//underfined
/* var test2 = undefined;

console.log(test);
console.log(test2);

test = "Valor modificado com sucesso";

console.log(test);

test = 127.8;

console.log(test); */

/* 
var a = 10;
var b = 20;
var c = null;


document.write('A: ' + a + ' <br />');
document.write('A: ' + b + ' <br />');
document.write('A: ' + c + ' <br />');

document.write('<hr/>');

c = b;
b = a;
a = c; 

document.write('A: ' + a + ' <br />');
document.write('A: ' + b + ' <br />');
document.write('A: ' + c + ' <br />');

console.log(b);
console.log(a); */


/* Aula 160/
------------------- */
/* var nota = prompt('Digite a nota do aluno: ')

var media = 7

if(nota >= media){
    document.write("Aprovado")
} else {
    document.write("Reprovado")
} */

/* Aula 161
--------------------- */

/* var variavel1 = prompt("Digite um número: ")
var variavel2 = prompt("Digite outro número: ")

//variavel1 = parseInt(variavel1) 
//variavel1 = parseFloat(variavel1)
//variavel2 = parseInt(variavel2)
//variavel2 = parseFloat(variavel2)

document.write(variavel1.toString() + variavel2.toString())

 */

 /* Aula 163
 --------------------- */

/* var nota = prompt("Digite a nota do aluno: ")
var faltas = prompt("Digite a quantidade de faltas: ")
var faltas_maximas = 15
var media = 7

 if(nota >= media && faltas <= faltas_maximas){
    document.write("Aprovado")
 } else {
    document.write("Reprovado")
} */

/* 
var resultado = <conteudo> ? <verdadeiro> : <falso> 
 */
/* document.write('<br/>')
var resultado = (nota >= media && faltas <= faltas_maximas) ? 'AprovadoTernario' : 'ReprovadoTernario'
document.write(resultado) */


/* Aula 165
--------------------- */

/* var idade = prompt("Digite a sua idade: ")

if(idade >= 0 && idade <= 15){
    document.write("Criança!")
} else if (idade > 15 && idade <= 30){
    document.write("Se é jovem ainda!")
} else if (idade > 30 && idade <= 60){
    document.write("Adulto meu good!")
} else {
    document.write("Meu bom, se ta velho!")
} */


/* Aula 167
---------------------- */

/* var parametro = prompt("Digite : ")

switch(parseInt(parametro)){
    case 1:
        document.write("Prametro 1")
        break;
    case 2:
        document.write("Prametro 2")
        break;
    default:
        document.write("default")
}
 */

 /* Aula 169
 -------------------- */

/* var num1 = prompt("Valor 1:")
var num2 = prompt("Valor 2:")

num1 = parseInt(num1)
num2 = parseInt(num2)


document.write("Soma de "+ num1 +" e "+num2 +" é: " + (num1 + num2) +"<br/>")
document.write("Subtração de "+ num1 +" e "+num2 +" é: " + (num1 - num2) +"<br/>")
document.write("Multiplicação de "+ num1 +" e "+num2 +" é: " + (num1 * num2) +"<br/>")
document.write("Divisão de "+ num1 +" e "+num2 +" é: " + (num1 / num2) +"<br/>")
document.write("Modulo de "+ num1 +" e "+num2 +" é: " + (num1 % num2) +"<br/>")
document.write("Incremento de "+ num1 +" é: " + (++num1) +"<br/>")
document.write("Decremento de "+ num1 +" é: " + (--num1) +"<br/>")

 */
/* 
//var teste = 10
var teste = 'Olá'


//teste = teste + 5
//teste += 5
//teste -= 5
//teste *= 5
//teste /= 2
//teste %= 3
teste += ', tudo bem?'

document.write(teste)
document.write(11+5-5*2/2)
*/

/* Atividade 172
----------------- */

/* //01 - Ao executar o script a aplicação deve solicitar a entrada do nome da pessoa. 

var nome_pessoa = prompt("Digite o seu nome: ")

//02 - Na sequência a aplicação deve solicitar que seja informada a altura da pessoa em centímetros.

var altura_pessoa = prompt("Digite a sua altura em centímetros: ")

//03 - Na sequência a aplicação deve solicitar que seja informado o peso da pessoa.

var peso_pessoa = prompt("Digite o seu peso: ")

//04 - Após as estradas de dados, atente-se a conversão das informações para dados do tipo float. 

altura_pessoa = parseFloat(altura_pessoa)
peso_pessoa = parseFloat(peso_pessoa)

//05 - Converta a altura recebida em centímetros para metros. (basta dividir a altura por 100). 

console.log(altura_pessoa)
altura_pessoa /= 100
console.log(altura_pessoa)

//06 - Internamente a aplicação deve executar o cálculo do índice de massa corporal através da expressão: M = peso (quilos) ÷ altura² 

var imc = peso_pessoa / (altura_pessoa ** 2)

console.log(imc)


7) Após identificar o índice de massa corporal o sistema deverá classificar em faixas descritivas utilizando os critérios abaixo: 
a) Se M estiver abaixo de 16 : Baixo peso muito grave 
b) Se M estiver entre 16 e 16,99:  Baixo peso grave 
c) Se M estiver entre 17 e 18,49: Baixo peso 
d) Se M estiver entre 18,50 e 24,99: Peso normal 
e) Se M estiver entre 25 e 29,99: Sobrepeso 
f) Se M estiver entre 30 e 34,99: Obesidade grau I 
g) Se M estiver entre 35 e 39,99: Obesidade grau II 
h) Se M for maior que 40: Obesidade grau III 


var classificacao = "";

if(imc < 16 ){
    classificacao = "Baixo peso muito grave"
} else if( imc >= 16 && imc <= 16.99){
    classificacao = "Baixo peso grave"
} else if (imc >= 17 && imc <= 18.49){
    classificacao = "Baixo peso"
} else if (imc >= 18.50 && imc <= 24.99){
    classificacao = "Peso normal"
} else if (imc >= 25 && imc <= 29.99){
    classificacao = "Sobrepeso"
} else if (imc >= 30 && imc <= 34.99){
    classificacao = "Obesidade grau I"
} else if (imc >= 35 && imc <= 39.99){
    classificacao = "Obesidade grau II"
} else {
    classificacao = "Obesidade grau III"
}

//08 Ao término o sistema deve fornecer a seguinte saída para o usuário:

document.write(nome_pessoa + ' possui índice de massa corporal igual a ' + imc.toFixed(2) + ' sendo classificado como: ' + classificacao) */

/* Aula 174
------------------- */
/* 
function calcularAreaTerreno(largura, comprimento){
    //lógica 
    var area = (largura * comprimento)
    //document.write('O terreno tem: '+ area + ' m²')
    return area
}

var largura = prompt("Qual a largura: ")
var comprimento = prompt("Qual o comprimento: ")

var area = calcularAreaTerreno(largura, comprimento)

document.write('O terreno tem : '+ area + ' m²')

 */


 /* Aula 175
 -------------------- */

/* function soma(a, b, c){
    return a + b + c
}

console.log(soma(7,7))
console.log(soma(7,7,15,14)) //desconsidera os parametros opcionais
console.log(soma(7)) // vai ser 7 + underfined, ou seja, vai da um NaN (Not a Number)
 */

 /* Aula 176
-------------------- */
//Tipo Global
/* var serie = 'Friends'

//Tipo de bloco
if (true) {
    var serie2 = 'Game of Thrones' 
    document.write(serie)
}

document.write('<br/>')

document.write(serie2)

//Tipo de função 
function x(){
    var serie3 = 'The Walking Dead'
    document.write('<br/>')
    document.write(serie)
    document.write('<br/>')
    document.write(serie2)
}

document.write('<br/>')

x() */


/* Aula 177 - Funções anônimas
-------------------------------*/

/* var exibirSaudacao = function(nome){
    document.write('Olá, ' + nome + ' tudo bem?')
}

exibirSaudacao('Jorge') */


/* 178 - Callback
----------------------------- */

/* function exibirArtigo( id, callbackSucesso, callbackErro){
    //Recuperar o ID via requisição http
    if(true){
        callbackSucesso('Funções de Callback em JS', 'Funções de callback são muito utilizadas...')
    } else {
        callbackErro('Erro ao recuperar os dados')
    }
}

var callbackSucesso = function (titulo, descricao) {
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr/>')
    document.write('<p>' + descricao + '</p>')

} 

var callbackErro = function(erro){
    document.write('<p><b>Erro</b>' + titulo + '</p>')
}

exibirArtigo(1, callbackSucesso, callbackErro)

//exibirArtigo(1, function () {}, function () {}) */

/* 179 - Manipulando String 
-------------------------------*/
/* 
var nome = ' Jorge Sant Ana '

//Propriedade chamada Length
document.write('Jorge Sant Ana'.length)

document.write('<br/>')
document.write('Jorge Sant Ana'.charAt(12))

document.write('<br/>')
document.write(nome.indexOf('a'))

document.write('<br/>')
document.write(nome.replace('Sant Ana', 'Silva'))

document.write('<br/>')
document.write(nome.substr(6, 4))

document.write('<br/>')
document.write(nome.toLowerCase())

document.write('<br/>')
document.write(nome.toUpperCase())

document.write('<br/>')
document.write('-' + nome.trim() + '-')
 */

/* Aula 180 Metodos Nativos para matemática 
--------------------------------------------*/
//-------------
/* 
var x = Math.ceil(10.380)

document.write(x)

document.write('<br/>')
//--------------
var x = Math.floor(10.380)

document.write(x)

document.write('<br/>')

//---------------
var x = Math.round(10.501)

document.write(x)

document.write('<br/>')

//---------------
var x = Math.random()

document.write(x)

document.write('<br/>')

 */

 /* Aula 181 -  Manipulando Data
----------------------------------*/
/* 
var data = new Date()


//document.write(data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear())


//Adicionar ou remover dias da data
document.write(data.toString())
data.setDate(data.getDate() + 1)

document.write('<hr/>')
document.write(data)
document.write('<br/><br/><br/><br/><br/><br/><hr/>')

//Adicionar ou remover meses
document.write(data.toString())
data.setMonth(data.getMonth() + 1)

document.write('<hr/>')
document.write(data)

document.write('<br/><br/><br/><br/><br/><br/><hr/>')

//Adicinar ou remover ano. 
//Adicionar ou remover dias da data
document.write(data.toString())
data.setFullYear(data.getFullYear() + 1)

document.write('<hr/>')
document.write(data) */
/* 

15/01/2017
var data1 = new Date(2017,0,15)

23/02/2017
var data2 = new Date(2017,1,23)

document.write(data1.toString())
document.write('<hr/>')
document.write(data2.toString())
document.write('<br/><br/><br/><br/><br/><br/><hr/>')

//Convertendo as datas para um valor que possamos calcular
//Recuperar em milissegundos de 01/01/1970 ate a minha data atual
document.write(data1.getTime())
document.write('<hr/>')
document.write(data2.getTime())
document.write('<br/><br/><hr/>')
//Encontrar a quantidade de milissegundos entre a data1 e data2
//document.write(Math.abs(data1.getTime() - data2.getTime()))
var milissegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())
document.write(data2.getTime() - data1.getTime())

//1 dia = 24h, 1h tem 60 minutos, 1 minuto 60 segundos e cada segundo tem 1000 milissegundos
var milissegundo_por_dia = (24*60*60*1000)
document.write('<br/><br/><hr/>')
document.write('A dirença de dias é: ' + Math.ceil(milissegundos_entre_datas/milissegundo_por_dia)) */

/* 184 - Atividade 
-------------------------------*/

/* 
1) Ao executar o script a aplicação deve solicitar a entrada de um número, seguido de
uma operação de soma ou subtração e posteriormente seguido de um segundo
número. 
 */

/* 
var num1 = prompt('Digite um número')
var operacao = prompt('Qual a sua operação?')
var num2 = prompt('Digite um número')

num1 = parseFloat(num1)
num2 = parseFloat(num2)
 */
/* 
2) A operação deve ser inserida pelo usuário de forma textual, ou seja, quando o sistema
solicita a operação o usuário deve informar o texto ‘soma’ ou ‘subtração’ (sem as
aspas). 
*/

/* function calculo(num1, num2, operacao) {

    var resultado = 0

    switch (operacao) {
        case 'soma':
            resultado = (num1 + num2)
            
            break;
    
         case 'subtração':
            resultado = (num1 - num2)
            break;
    
        default:
            document.write('Erro Operação!!!')
            document.write('<br/><br/>')
            break;
    }
    return resultado
}

document.write('O resultado com é: '+ calculo(num1,num2,operacao)) */

/* Aula 185 - Eventos (mouse)
-----------------------------*/

/* function acao() {
    alert("Evento disparado")
}
 */

/* Aula 186 - Eventos (teclado)
-----------------------------*/

/* function acao1(params) {
    alert('Evento Disparado')
} */


/* Aula 190 - DOM
-----------------------------*/

function distribuiCaracter(){
    //Selecionar o valor digitado
    console.log(document.getElementById('entrada'))
}

