var nome = document.querySelector("#nome");
var email = document.querySelector("#email");
var cnpj = document.querySelector("#cnpj");
var tel = document.querySelector("#telefone");
var servico = document.querySelector("#cdServicos");
var data = document.querySelector("#data");
var hora = document.querySelector("#hora");
var local = document.querySelector("#local");
var msg = document.querySelector("#mensagem");

var btnContato = document.querySelector("#btn-contratar");

btnContato.addEventListener("click", function () {
    alert("Nome: "+ nome.value + "\n" +
          "Email: " + email.value + "\n" +
          "CNPJ: " + cnpj.value + "\n" +
          "Telefone: " + tel.value + "\n" +
          "Serviço: " + servico.value + "\n" +
          "Data: " + data.value + "\n" +
          "Hora: " + hora.value + "\n" +
          "Local: " + local.value + "\n" +
          "Mensagem: " + msg.value);
});