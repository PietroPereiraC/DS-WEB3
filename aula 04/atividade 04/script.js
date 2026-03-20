let contadorItem = 0;

function adicionar() {
    contadorItem++;

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let rm = document.getElementById("rm").value;
    let telefone = document.getElementById("telefone").value;
    let turma = document.getElementById("turma").value;

    let novoItem = document.createElement("li");
    novoItem.setAttribute("id", contadorItem);

    novoItem.innerHTML =
        nome + "<br>" +
        email + "<br>" +
        rm + "<br>" +
        telefone + "<br>" +
        turma;

    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.setAttribute("onclick", "remover(" + contadorItem + ")");

    novoItem.appendChild(botaoRemover);
    document.getElementById("lista").appendChild(novoItem);
}

function remover(id) {
    document.getElementById(id).remove();
}