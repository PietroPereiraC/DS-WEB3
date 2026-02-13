function limparTitulo() {
    let titulo = document.querySelector("h1");
    if (titulo) {
        titulo.remove();
    }
}

function fundoAzul() {
    document.body.style.backgroundColor = "blue";

    limparTitulo();

    let h1 = document.createElement("h1");
    h1.innerHTML = "Página Azul";
    document.body.appendChild(h1);
}

function fundoVerde() {
    document.body.style.backgroundColor = "green"; 

    limparTitulo();

    let h1 = document.createElement("h1");
    h1.innerHTML = "Página Verde";
    document.body.appendChild(h1);
}

function fundoVermelho() {
    document.body.style.backgroundColor = "red";

    limparTitulo();

    let h1 = document.createElement("h1");
    h1.innerHTML = "Página Vermelha";
    document.body.appendChild(h1);
}
