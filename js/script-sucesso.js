

//recuperando o toke do usuario no sessionStorage
let tokenUser = sessionStorage.getItem("token");


if(tokenUser != "" && tokenUser != undefined){

//Recuperando o objeto do usuário logado.
const usuario = JSON.parse(localStorage.getItem("usuario-logado"));
    const elWelcomeUser = document.querySelector("#user-welcome");
    elWelcomeUser.innerText = usuario.email;

    //colocar os dados do usuario nass células corretas
    //recuperar os elementos da tabela
    const listaColDadosUser = document.querySelectorAll("tbody tr td");
    listaColDadosUser[0].innerText = usuario.nome;
    listaColDadosUser[1].innerText = usuario.sobrenome;
    listaColDadosUser[2].innerText = usuario.dtNasc;
    listaColDadosUser[3].innerText = usuario.email;
    listaColDadosUser[4].innerText = usuario.genero;


    const elLogoutUser = document.querySelector("#user-logout");
    elLogoutUser.addEventListener("click", ()=>{
        sessionStorage.removeItem("token");
        localStorage.removeItem("usuario-logado");
        window.location.href = "../index.html";
    });
}else{
    window.location.href = "../status/erro.html";
}   