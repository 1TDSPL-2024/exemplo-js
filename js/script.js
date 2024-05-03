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

// var x = 10;
// let y = 20;
// const z = 30;
// console.log(x);
// console.log(y);
// console.log(z);

// Exercício 2 - Tipos de Dados:
// Declare variáveis representando diferentes tipos de dados (número, string, booleano, array e objeto) e imprima cada uma delas no console.

// let num = 5;
// console.log(num);

// let str = "Olá Mundo!";
// console.log(str);

// let bool = true;
// console.log(bool);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// let obj = {nome: "Felipe", idade: 18, cidade: "São Paulo"}
// console.log(obj);
// console.log(obj.nome);
// console.log(obj.idade);
// console.log(obj.cidade);

// Exercício 3 - Conversão de String para Número:
// Converta a string "25" em um número e imprima no console.

// let strNumero = "25";
// console.log(strNumero)
// let numero = parseInt(strNumero);
// console.log(numero);


// Exercício 4 - Conversão de Número para String:
// Converta o número 30 em uma string e imprima no console.

// let numeroStr = 30;
// console.log(numeroStr);
// let strNumero2 = numeroStr.toString();
// console.log(strNumero2);

// Exercício 5 - Conversão para Booleano:
// Converta o valor 0 para um booleano e imprima no console.

// let valor = 0;
// let booleano = Boolean(valor);
// console.log(booleano);

// Manipulação do DOM
// Funções

// Declarando funções clássica
// function soma(a,b) {
//     return a + b;
// }

// Declarando funções anônimas
// let soma1 = function(a,b) {
//     return a + b;
// }

// Recuperando o valor da função através de variável e imprimindo
// let resultado = soma(10,20);
// console.log(resultado)
// console.log(soma1(2, 2));

// Criar uma lista de usuarios

let listaUsuarios = [
    {emailUsuario: "felipe@email.com", senhaUsuario: "123456"},
    {emailUsuario: "jose@email.com", senhaUsuario: "123456"},
    {emailUsuario: "anna@email.com", senhaUsuario: "123456"},
    {emailUsuario: "pedro@email.com", senhaUsuario: "123456"},
    {emailUsuario: "arthur@email.com", senhaUsuario: "123456"},
];
// let usuario = {
//     email:"jose@email.com",
//     senha:"senha"
//   }

// for (let x = 0; x < listaUsuarios.length; x++) {
//     if(u.emailUsuario === usuario.email){
//     console.log("Email Encontrado!");
//   }
// }

const btnSubmit = document.querySelector("button[type=submit]");
//Adicionando um evento ao botão submit.
btnSubmit.addEventListener("click",function(){
  //Recuperando os dados dos inputs dos usuários:
  let email = document.querySelector("input[type=email]").value;
  let senha = document.querySelector("input[type=password]").value;

  //criando o obejto que vai guardar os dados que será digitado no form
  let usuario = {
    email : "",
    senha : "",
  }

  //populando o objeto com os dados do form
  usuario.email = email;
  usuario.senha = senha;

  //criando sistema de validação com loop
  const msg = document.querySelector(".valida");
  for (let x = 0; x < listaUsuarios.length; x++) {
    if ((usuario.email === listaUsuarios[x].emailUsuario) && (usuario.senha === listaUsuarios[x].senhaUsuario)) {
        
        const msg = document.querySelector(".valida");
        
        msg.textContent = "Login validado com sucesso!";
      msg.setAttribute("class","sucess");
      setTimeout(()=>{
        msg.setAttribute("class","valida");
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

