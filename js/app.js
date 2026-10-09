const amigos = [];

let nomes = [];

function adicionar() {
    let campo = document.getElementById("nome-amigo");
    let lista = document.getElementById("lista-amigos");

    let nome = campo.value.trim();

    if (nome === "") {
        alert("Digite o nome de um amigo!");
        return;
    }

    nomes.push(nome);

    lista.textContent = nomes.join(", ");

    campo.value = "";
    campo.focus();
}

function sortear() {
  // TODO validar escolher e exibir
}

function reiniciar(evento) {
  // TODO impedir a navegação e restaurar o estado
}
