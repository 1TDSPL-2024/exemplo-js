if(!localStorage.getItem("base")){
    let baseUsuarios = [
        {nome:"",sobrenome:"",dtNasc:"",email:"",senha:"",genero:""}
    ]
    localStorage.setItem("base",JSON.stringify(baseUsuarios));
    console.log("BASE-CRIADA");
}

//Recuperando lista de elementos no DOM
// let listaDeInputsComTagName = document.getElementsByTagName("input");

//Recuperando o localStorage com a base de dados:
let baseUsuarios = JSON.parse(localStorage.getItem("base"));


const cadastrar = ()=>{
    //Recuperando lista de elementos no DOM com spread
    let listaDeInputsComArray = [...document.getElementsByTagName("input")];

    let usuario = [];

    listaDeInputsComArray.forEach((item)=>{ 
        usuario.push(item.value);
    })

    //Recuperando o select
    usuario.push(document.querySelector("#idGenero").value)

    console.log("USUARIO : " + usuario);

    let pessoa = {nome:usuario[0],sobrenome:usuario[1],dtNasc:usuario[2],email:usuario[3],senha:usuario[4],genero:usuario[5]}
    baseUsuarios.push(pessoa);
    localStorage.setItem("base",JSON.stringify(baseUsuarios));

    console.table(baseUsuarios);

    //Redirect para login
    window.location.href = "../index.html";
    return false;
}