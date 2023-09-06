function salvarDados() {
    var nome = document.getElementById("nome").value;
    var meta = document.getElementById("meta").value;
    var metaData = document.getElementById("meta-data").value;

    document.cookie = `nome=${nome};path=/`;
    document.cookie = `meta=${meta};path=/`;
    document.cookie = `metaData=${metaData};path=/`;
}