//==================eventos mouse=======================

var area = document.getElementById("area");
var mensagem = document.getElementById("mensagem");

area.addEventListener("click", function () {
    ;
    mensagem.textContent = "Clicou!";
});

area.addEventListener("dblclick", function () {
    if (area.style.backgroundColor === "lightblue") {
        area.style.backgroundColor = "white";
    } else {
        area.style.backgroundColor = "lightblue";
        mensagem.textContent = "Duplo clique!";
    }
});

area.addEventListener("mouseenter", function () {
    area.style.backgroundColor = "lightgreen";
    mensagem.textContent = "Mouse entrou!";
});

area.addEventListener("mouseleave", function () {
    area.style.backgroundColor = "white";
    mensagem.textContent = "Mouse saiu!";
});

var coordenadas = document.getElementById("posicao");

area.addEventListener("mousemove", function (event) {
    coordenadas.textContent = "X:" + event.clientX + " Y:"
        + event.clientY;
});


//=================eventos do teclado===================
document.addEventListener("keydown", function (event) {
console.log("Tecla pressionada: " + event.key);
});
document.addEventListener("keyup", function (event) {
    var campo = document.getElement
console.log("Tecla liberada: " + event.key);
});
document.addEventListener("keypress", function (event) {
console.log("Tecla pressionada (keypress): " + event.key);
});

//=================eventos de formulário================

//=================eventos de janela================