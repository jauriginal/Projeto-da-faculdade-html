var formularioLogin = document.getElementById("formLogin");

formularioLogin.addEventListener("submit", verificarLogin);

function verificarLogin(evento) {
  evento.preventDefault(); 

  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;

  if (usuario === "cliente" && senha === "sonho123") {
    alert("Login realizado com sucesso! Bem-vindo(a).");
    localStorage.setItem("ultimoUsuario", usuario);
  } else {
    alert("Usuário ou senha incorretos. Tente novamente.");
  }
}

window.addEventListener("load", function () {
  var usuarioSalvo = localStorage.getItem("ultimoUsuario");

  if (usuarioSalvo) {
    document.getElementById("usuario").value = usuarioSalvo;
  }
});