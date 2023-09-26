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

    document.getElementById("valor-adicionar").value = 0;
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

    if (valorAtual > 0) {
        textoRestante.textContent = `falta R$ ${valorAtual} para bater a meta`;
    } else {
        textoRestante.textContent = `Você bateu a meta!`;
    }

    document.getElementById("valor-adicionar").value = 0;
}

function stopDefEvent(e) {
    e.preventDefault()
    salvarNumero();
}

document.getElementById("add").addEventListener('submit', stopDefEvent, false);

// dark and light mode

var icon = document.querySelector("[data-theme-toggle]");
loadTheme();

function toggleTheme() {
    let currentThemeSetting = document.querySelector("html").getAttribute("data-theme");
    var icon = document.querySelector("[data-theme-toggle]");

    if (currentThemeSetting === "dark") {
        document.querySelector("html").setAttribute("data-theme", "light");
        currentThemeSetting = "light";
        icon.innerText = "light_mode";

        const logo = document.querySelector(".logo");
        logo.src = "assets/images/logo_dark.png";

        localStorage.setItem("theme", "light");
    } else {
        document.querySelector("html").setAttribute("data-theme", "dark");
        icon.innerText = "dark_mode";

        const logo = document.querySelector(".logo");
        logo.src = "assets/images/logo_light.png";

        localStorage.setItem("theme", "dark");
    }
}

function loadTheme () {
    let SystemThemeSetting = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    let currentThemeSetting = localStorage.getItem("theme");         
    
    if(currentThemeSetting === "dark" || (SystemThemeSetting === true && currentThemeSetting === null)) {
        newTheme = "dark";
        changeIcon = "dark_mode";
    } else {
        newTheme = "light";
        changeIcon = "light_mode";
    }
    
    icon.innerText = changeIcon;
    document.querySelector("html").setAttribute("data-theme", newTheme);
}
