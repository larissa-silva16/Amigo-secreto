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

    let indice = Math.floor(Math.random() * nomes.length);
    let escolhido = nomes[indice];

    let resultado = document.getElementById("lista-sorteio");
    resultado.textContent = escolhido;
}

