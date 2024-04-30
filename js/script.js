// "use strict"
// //Hoisting
// // var nome = "Joaquim";

// // if(true)
// // {
// //     let nome = "João";
// // }

// // console.log(nome);

// // Declaração de variáveis (var, let, const):
// // Usando var
// // var x = 10;
// // console.log(x);

// // // Usando let
// // let y = 20;
// // console.log(y);

// // // Usando const (constante, valor não pode ser alterado)
// // const z = 30;
// // console.log(z);
// // // z = 20;

// // Tipos de dados em JavaScript:

// // Number
// let num = 10;
// console.log(num);

// // String
// let str = "Olá, mundo!";
// console.log(str.charAt(0));
// console.log(str.indexOf("Olá"));

// // Boolean
// let bool = true;
// console.log(bool);

// // Array
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6,7,8,9,10];
// console.log(arr1);
// console.table(arr1);
// // Mesclar Arrays
// let arr3 = arr1.concat(arr2);
// console.log(arr3);
// // Mesclar Arrays com SPREAD
// let arr4 = [...arr1, ...arr2];
// console.log(arr4);

// // Object
// let obj = { nome: "João", idade: 25, devedor: true};
// console.log(obj);
// console.table(obj);
// console.log(obj.nome);
// console.log(obj.idade);
// console.log(obj.devedor);
// console.log(obj["nome"]);
// //Quero carregar um atributo do objeto utilizando uma variável
// let atributo = "idade";
// console.log("ATRIBUTO VARIADO : " + obj[atributo]);

// //Adicionando um nova propriedade ao objeto OBJ e utilizando o operador SPREAD para preencher
// obj = {...obj, cidade: "São Paulo", estado: "SP"};
// console.log(obj);

// //DESTRUCTURING
// const pessoa = {nome : 'Maria', idade: 34, cidade: 'Florianópolis'};

// const {nome, idade, cidade} = pessoa;
// console.log(nome);
// console.log(idade);
// console.log(cidade);


// // EXERCÍCIOS

// // Conversão entre tipos de dados:

// // Converter string para número
// let strNumero = "10";
// let numero = parseInt(strNumero);
// console.log(numero); // Saída: 10 (número)

// // Converter número para string
// let numeroStr = 20;
// let strNumero2 = numeroStr.toString();
// console.log(strNumero2); // Saída: "20" (string)

// // Converter para booleano
// let valor = 0;
// let booleano = Boolean(valor);
// console.log(booleano); // Saída: false (0 é considerado false)

// // EXERCÍCIOS

// // Exercício 1 - Declarando Variáveis:
// // Declare três variáveis diferentes (x, y, z) usando var, let e const, respectivamente. Em seguida, imprima o valor de cada variável no console.

// var x = 1
// console.log(x)

// let y = 2
// console.log(y)

// const z = 3
// console.log(z)

// // Exercício 2 - Tipos de Dados:
// // Declare variáveis representando diferentes tipos de dados (número, string, booleano, array e objeto) e imprima cada uma delas no console.

// let numexec = 7
// console.log(numexec)

// let string = "Exercício 2"
// console.log(string)

// let boolean = false
// console.log(boolean)

// let array = [1, 2, 3, 4, 5]
// console.log(array)

// let objeto = {professor: "Ale Carlos", matéria: "Front-end"}
// console.log(objeto)

// // Exercício 3 - Conversão de String para Número:
// // Converta a string "25" em um número e imprima no console.

// let stringexec = "25"
// let stringtonum = parseInt(stringexec)
// console.log(stringtonum)

// // Exercício 4 - Conversão de Número para String:
// // Converta o número 30 em uma string e imprima no console.

// let converter = 30
// let numtostring = converter.toString()
// console.log(numtostring)

// // Exercício 5 - Conversão para Booleano:
// // Converta o valor 0 para um booleano e imprima no console.

// let value = 0
// let boleanexec = Boolean(value)
// console.log(boleanexec)

// MANIPULAÇÃO DO DOM
// Funções

// Declarando funções clássica
function soma(a, b) {
    return a + b
}

// Declarando funções anônimas
let soma1 = function(a, b) {
    return a + b
} 

// Recuperando o valor da função atráves de uma variável
let resultado = soma(10, 20)
console.log(resultado)
console.log(soma1(2, 2))