let lista = [];

function adicionar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let rm = document.getElementById("rm").value;
    let telefone = document.getElementById("telefone").value;
    let turma = document.getElementById("turma").value;
    
    lista.push({
        nome: nome,
        email: email,
        rm: rm,
        telefone: telefone,
        turma: turma
    });

    exibirLista();
}

function exibirLista() {
    let divLista = document.getElementById("lista");
    divLista.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        let aluno = lista[i];
        divLista.innerHTML += `
            <li>
                Nome: ${aluno.nome} | 
                Email: ${aluno.email} | 
                RM: ${aluno.rm} | 
                Telefone: ${aluno.telefone} | 
                Turma: ${aluno.turma}
                <button onclick="remover(${i})">Remover</button>
            </li>
        `;
    }
}

function remover(index) {
    lista.splice(index, 1);
    exibirLista();
}