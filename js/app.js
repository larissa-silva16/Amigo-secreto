const amigos = [];

let nomes = [];

function adicionar() {
    const campo = document.getElementById("nome");
    const nome = campo.value.trim();

    if (nome === "") {
        alert("Digite um nome.");
        return;
    }

    nomes.push(nome);

    const lista = document.getElementById("lista");
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
