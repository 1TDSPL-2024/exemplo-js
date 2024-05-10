 

// let baseUsuarios = [
//     {nome:"",sobrenome:"",dtNasc:"",email:"",senha:"",genero:""}
// ]
// localStorage.setItem("base",JSON.stringify(baseUsuarios));

//Recuperando lista de elementos no DOM
// let listaDeInputsComTagName = document.getElementsByTagName("input");

//Recuperando lista de elementos no DOM com spread
let listaDeInputsComArray = [...document.getElementsByTagName("input")];

let baseUsuarios = JSON.parse(localStorage.getItem("base"));

let usuario = [];

listaDeInputsComArray.forEach((item)=>{ 
    usuario.push(item.name);
})

let pessoa = {nome:usuario[0],sobrenome:usuario[1],dtNasc:usuario[2],email:usuario[3],senha:usuario[4],genero:usuario[5]}
baseUsuarios.push(pessoa)

console.log(baseUsuarios)