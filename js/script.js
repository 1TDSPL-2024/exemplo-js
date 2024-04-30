// console.log('Ola Mundo');

// var elH1 = document.getElementById('titulo');

// console.log(elH1);

// var elButton = document.getElementById('btn');

// // elButton.addEventListener("evento", "função anônima");
// elButton.addEventListener("click", function(){
//     var nrA1 = Math.round(Math.random());
//     var nrA2 = Math.round(Math.random());
//     var nrA3 = Math.round(Math.random());
//     var nrA4 = Math.round(Math.random());
//     var nrA5 = Math.round(Math.random());
//     var nrA6 = Math.round(Math.random());

//     console.error('ERRO');
//     console.info('INFO');
//     console.warn('AVISO');

//     const arrayFrutas = ["laranja", "banana", "maçã", "limão"]
//     console.table(arrayFrutas);

//     document.body.style.backgroundColor = `#${nrA1}${nrA2}${nrA3}${nrA4}${nrA5}${nrA6}`;
// });

// EXERCÍCIOS

// Exercício 1 - Declarando Variáveis:
// Declare três variáveis diferentes (x, y, z) usando var, let e const, respectivamente. Em seguida, imprima o valor de cada variável no console.

var x = 10;
let y = 20;
const z = 30;
console.log(x);
console.log(y);
console.log(z);

// Exercício 2 - Tipos de Dados:
// Declare variáveis representando diferentes tipos de dados (número, string, booleano, array e objeto) e imprima cada uma delas no console.

let num = 5;
console.log(num);

let str = "Olá Mundo!";
console.log(str);

let bool = true;
console.log(bool);

let arr = [1, 2, 3, 4, 5];
console.log(arr);

let obj = {nome: "Felipe", idade: 18, cidade: "São Paulo"}
console.log(obj);
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.cidade);

// Exercício 3 - Conversão de String para Número:
// Converta a string "25" em um número e imprima no console.

let strNumero = "25";
console.log(strNumero)
let numero = parseInt(strNumero);
console.log(numero);


// Exercício 4 - Conversão de Número para String:
// Converta o número 30 em uma string e imprima no console.

let numeroStr = 30;
console.log(numeroStr);
let strNumero2 = numeroStr.toString();
console.log(strNumero2);

// Exercício 5 - Conversão para Booleano:
// Converta o valor 0 para um booleano e imprima no console.

let valor = 0;
let booleano = Boolean(valor);
console.log(booleano);