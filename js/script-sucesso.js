//Recuperando o objeto do usuário logado.
const usuario = JSON.parse(localStorage.getItem("usuario-logado"));

if(usuario) {

  const elWelcomeUser = document.querySelector("#user-welcome");
  elWelcomeUser.innerText = usuario.email;

  const elLogoutUser = document.querySelector("#user-logout");
  elLogoutUser.addEventListener("click", ()=>{
    localStorage.removeItem("usuario-logado");
    window.location.href = "../index.html";
  });
} else {
  window.location.href = "../index.html";
}