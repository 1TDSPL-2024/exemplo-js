//Recuperando o objeto do usuário logado

const usuario = JSON.parse(localStorage.getItem("usuario-logado"))

const elWelcomeUser = document.querySelector("#user-welcome");

elWelcomeUser.innerText = `${usuario.email}`
console.log(usuario);
