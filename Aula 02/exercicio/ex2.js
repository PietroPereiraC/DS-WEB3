function trocarImagem1() {
    let img = document.getElementById("foto");
    img.setAttribute("src", "messi1.gif");
}

function trocarImagem2() {
    let img = document.getElementById("foto");
    img.setAttribute("src", "imagem.jpg");
}

function mostrarSrc() {
    let img = document.getElementById("foto");
    console.log(img.getAttribute("src"));
}
