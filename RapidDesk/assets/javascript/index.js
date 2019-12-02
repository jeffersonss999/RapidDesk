console.log("index.js");

function inserirMascara(campoPassado, mascara) {
    console.log(campoPassado.value.length)
    console.log(campoPassado.value)
    var campo = campoPassado.value.length;
    var saida = mascara.substring(0,1);
    var texto = mascara.substring(campo);

    if (texto.substring(0, 1) != saida) {
        campoPassado.value += texto.substring(0, 1);
    }
}