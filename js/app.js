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
    if (nomes.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }

    const indice = Math.floor(Math.random() * nomes.length);
    const escolhido = nomes[indice];

    document.getElementById("lista-sorteio").textContent = escolhido;
}

function reiniciar(event) {
    if (event) {
        event.preventDefault();
    }

    nomes.length = 0;

    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent = "";

    document.getElementById("nome-amigo").focus();
}
