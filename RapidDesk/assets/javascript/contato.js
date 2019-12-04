var nome = document.querySelector("#nome");
var email = document.querySelector("#email");
var tel = document.querySelector("#telefone");
var msg = document.querySelector("#mensagem");


var btnContato = document.querySelector("#btn-contratar");

btnContato.addEventListener("click", function () {
    alert("Nome: "+ nome.value + "\n" +
          "Email: " + email.value + "\n" +
          "Telefone: " + tel.value + "\n" +
          "Mensagem: " + msg.value);
});