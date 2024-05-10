

//Recuperando o token do usuário no sessionStorage
let tokenUser = sessionStorage.getItem("token");

if(tokenUser != "" && tokenUser != undefined ){

//Recuperando o objeto do usuário logado.
    const usuario = JSON.parse(localStorage.getItem("usuario-logado"));
    const elWelcomeUser = document.querySelector("#user-welcome");
    elWelcomeUser.innerText = usuario.email;

    const elLogoutUser = document.querySelector("#user-logout");
    elLogoutUser.addEventListener("click", ()=>{
        sessionStorage.removeItem("token");
        localStorage.removeItem("usuario-logado");
        window.location.href = "../index.html";
    });
}else{
    window.location.href = "../status/erro.html";
}   