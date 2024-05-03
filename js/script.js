"use strict"
//Hoisting
// var nome = "Joaquim";

// if(true)
// {
//     let nome = "João";
// }

// console.log(nome);

// Declaração de variáveis (var, let, const):
// Usando var
// var x = 10;
// console.log(x);

// // Usando let
// let y = 20;
// console.log(y);

// // Usando const (constante, valor não pode ser alterado)
// const z = 30;
// console.log(z);
// // z = 20;

// Tipos de dados em JavaScript:

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

// EXERCÍCIOS

// Exercício 1 - Declarando Variáveis:
// Declare três variáveis diferentes (x, y, z) usando var, let e const, respectivamente. Em seguida, imprima o valor de cada variável no console.
// var x = 10;
// let y = 20;
// const z = 30;

// console.log(x);
// console.log(y);
// console.log(z);

// // Exercício 2 - Tipos de Dados:
// // Declare variáveis representando diferentes tipos de dados (número, string, booleano, array e objeto) e imprima cada uma delas no console.
// let num = 10;
// let str = "string";
// let bool = true;
// let arr = [1, 2, 3];
// let obj = {nome : "João", idade: 25};
// console.log(num);
// console.log(str);
// console.log(bool);
// console.log(arr);
// console.log(obj);

// // Exercício 3 - Conversão de String para Número:
// // Converta a string "25" em um número e imprima no console.
// let strNumero = "25.5";
// let numero = parseFloat(strNumero);
// console.log(numero);

// // Exercício 4 - Conversão de Número para String:
// // Converta o número 30 em uma string e imprima no console.
// let numeroStr = 30;
// console.log(numeroStr.toString());

// // Exercício 5 - Conversão para Booleano:
// // Converta o valor 0 para um booleano e imprima no console.
// let valor = 1;
// let booleano = Boolean(valor);
// console.log(booleano);

//MANIPULAÇÃO DO DOM
//Funçoes

//Declarando funções clássica
// function soma(a, b) {
//   return a + b;
// }
// //Declarando funções anônimas
//  let soma1 = function(a, b) {
//    return a + b;
//  }

// //Recuperando o valor da função através de variável e imprimindo!
// let resultado = soma(10, 20);
// console.log(resultado);
// console.log(soma1(2,2));


//Criar uma lista de usuários

let listaUsuarios = [
  {emailUsuario:"jose@email.com",senhaUsuario:"123456"},
  {emailUsuario:"joaquim@email.com",senhaUsuario:"123456"},
  {emailUsuario:"maria@email.com",senhaUsuario:"123456"},
  {emailUsuario:"manoel@email.com",senhaUsuario:"123456"},
  {emailUsuario:"roberto@email.com",senhaUsuario:"123456"},
];
// let usuario = {
//   email:"jose@email.com",
//   senha:"senha"
// }

// for (let x = 0; x < listaUsuarios.length; x++) {
//   if(u.emailUsuario === usuario.email){
//     console.log("Email Encontrado!");
//   }
// }

const btnSubmit = document.querySelector("button[type=submit]");
//Adicionando um evento ao botão submit.
btnSubmit.addEventListener("click",function(){
  //Recuperando os dados dos inputs dos usuários:
  let email = document.querySelector("input[type=email]").value;
  let senha = document.querySelector("input[type=password]").value;

  //Criando o objeto que vai guardar os dados que será digitado no form.
  let usuario = {
    email : "",
    senha : ""
  }

  //Populando o objeto com os dados do form.
  usuario.email = email;
  usuario.senha = senha;

  const msg = document.querySelector(".valida");

  //Criando sistema de validação com loop.
  for (let x = 0; x < listaUsuarios.length; x++) {

    if((usuario.email === listaUsuarios[x].emailUsuario) && (usuario.senha === listaUsuarios[x].senhaUsuario)){
      
      msg.textContent = "Login validado com sucesso!";
      msg.style.color = "#00ff00";
      setTimeout(()=>{
        msg.textContent = "";
      }, 5000);
      return true;
    }

  }


  msg.textContent = "Login ou senha inválidos!";
  msg.setAttribute("class","error");
  setTimeout(()=>{
    msg.setAttribute("class","valida");
  }, 5000);
  
})





