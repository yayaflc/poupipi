function salvarDados() {
    var nome = document.getElementById("nome").value;
    var meta = document.getElementById("meta").value;
    var metaData = document.getElementById("meta-data").value;

    window.location.href = `user.html?nome=${nome}&meta=${meta}&metaData=${metaData}`;
}

var valorAtual = 0;

function carregarDados() {

    var url = window.location.href;
    var nome = url.split("?")[1].split("&")[0].split("=")[1];
    var meta = url.split("?")[1].split("&")[1].split("=")[1];
    var metaData = url.split("?")[1].split("&")[2].split("=")[1];
    valorAtual = url.split("?")[1].split("&")[1].split("=")[1];

    // formatação dos dados recebidos
    nome = nome.replace(/%20/g, " ");
    metaData = metaData.split("-").reverse().join("/");

    var textoNomeUser = document.getElementById("texto-nome-user");
    textoNomeUser.textContent = `Bem-vindo, ${nome}`;

    var textoMeta = document.getElementById("texto-meta");
    textoMeta.textContent = `A sua meta é R$ ${meta}`;

    var textoData = document.getElementById("texto-data");
    textoData.textContent = `até dia ${metaData}`;

    var textoRestante = document.getElementById("valor-restante");
    textoRestante.textContent = `falta R$ ${valorAtual} para bater a meta`;
}

window.onload = carregarDados;

function somarNumero() {
    var valorSomar = document.getElementById("valor-adicionar").value;
    valorSomar = parseInt(valorSomar) + parseInt(10);

    document.getElementById("valor-adicionar").value = valorSomar;
}

function subtrairNumero() {
    var valorSubtrair = document.getElementById("valor-adicionar").value;
    valorSubtrair = parseInt(valorSubtrair) - parseInt(10);

    document.getElementById("valor-adicionar").value = valorSubtrair;
}

function salvarNumero() {
    var valor = document.getElementById("valor-adicionar").value;
    valorAtual = valorAtual - valor;


    var textoRestante = document.getElementById("valor-restante");

    if (valorAtual >= 0) {
        textoRestante.textContent = `falta R$ ${valorAtual} para bater a meta`;
    } else {
        textoRestante.textContent = `Você bateu a meta!`;
    }

    document.getElementById("valor-adicionar").value = ""
}
