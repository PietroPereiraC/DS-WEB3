var area = document.getElementById("area");
var mensagem = document.getElementById("mensagem");
var posicao = document.getElementById("posicao");

// Pontuação
var pontos = 0;
var resultado = document.getElementById("resultado");
resultado.textContent = "Pontos: 0";

// Áudio de fundo
var audio = new Audio("OLHA O MACACO (Dragon Ball) - Jorge (youtube).mp3");
audio.loop = true;
var audioIniciado = false;

/* cria o gorila */
var gorila = document.createElement("div");
gorila.id = "gorila";
gorila.textContent = "🦍";
area.appendChild(gorila);

//arvores
var arvore1 = document.createElement("div");
arvore1.className = "arvore1";
arvore1.textContent = "🌳";
arvore1.style.left = "60px";
arvore1.style.top = "80px";
area.appendChild(arvore1);

var arvore2 = document.createElement("div");
arvore2.className = "arvore2";
arvore2.textContent = "🌳";
arvore2.style.left = "420px";
arvore2.style.top = "150px";
area.appendChild(arvore2);

var arvore3 = document.createElement("div");
arvore3.className = "arvore3";
arvore3.textContent = "🌳";
arvore3.style.left = "900px";
arvore3.style.top = "90px";
area.appendChild(arvore3);

var arvore4 = document.createElement("div");
arvore4.className = "arvore4";
arvore4.textContent = "🌳";
arvore4.style.left = "200px";
arvore4.style.top = "480px";
area.appendChild(arvore4);

var arvore5 = document.createElement("div");
arvore5.className = "arvore5";
arvore5.textContent = "🌳";
arvore5.style.left = "650px";
arvore5.style.top = "350px";
area.appendChild(arvore5);

var arvore6 = document.createElement("div");
arvore6.className = "arvore6";
arvore6.textContent = "🌳";
arvore6.style.left = "1050px";
arvore6.style.top = "520px";
area.appendChild(arvore6);

var arvore7 = document.createElement("div");
arvore7.className = "arvore7";
arvore7.textContent = "🌳";
arvore7.style.left = "480px";
arvore7.style.top = "600px";
area.appendChild(arvore7);

// Bananas
var bananas = [];
var numBananas = 20;
for (var i = 0; i < numBananas; i++) {
    var banana = document.createElement("div");
    banana.className = "banana";
    banana.textContent = "🍌";
    // Posição aleatória dentro da área
    banana.style.position = "absolute";
    banana.style.left = (Math.random() * 950 + 20) + "px";
    banana.style.top = (Math.random() * 450 + 20) + "px";
    area.appendChild(banana);
    bananas.push(banana);
}

// Homem perseguidor
var homem = document.createElement("div");
homem.id = "homem";
homem.textContent = "🚶‍♂️";
homem.style.position = "absolute";
homem.style.left = "800px";
homem.style.top = "400px";
area.appendChild(homem);

var hx = 800;
var hy = 400;
var homemPasso = 6;
var jogoAtivo = true;

function moverHomem() {
    if (!jogoAtivo) return;
    // Move homem em direção ao gorila
    var dx = x - hx;
    var dy = y - hy;
    var dist = Math.sqrt(dx*dx + dy*dy);
    if (dist > 1) {
        hx += Math.round(homemPasso * dx / dist);
        hy += Math.round(homemPasso * dy / dist);
        // Limites da área
        if (hx < 0) hx = 0;
        if (hy < 0) hy = 0;
        if (hx > 975) hx = 975;
        if (hy > 475) hy = 475;
        homem.style.left = hx + "px";
        homem.style.top = hy + "px";
    }
    // Checa colisão com gorila
    if (Math.abs(x - hx) < 35 && Math.abs(y - hy) < 35) {
        mensagem.textContent = "O homem pegou o gorila! Fim de jogo.";
        jogoAtivo = false;
        gorila.style.opacity = 0.5;
        homem.style.opacity = 1;
    } else {
        setTimeout(moverHomem, 60);
    }
}

moverHomem();

/* posição inicial do gorila */
var x = 130;
var y = 130;
var passo = 10;

/* evento de teclado */
document.addEventListener("keydown", function (event) {

    // Inicia o áudio ao primeiro movimento
    if (!audioIniciado) {
        audio.play();
        audioIniciado = true;
    }

    if (!jogoAtivo) return;
    mensagem.textContent = "Tecla pressionada: " + event.key;

    if (event.key === "w") {
        y = y - passo;
    }

    if (event.key === "s") {
        y = y + passo;
    }

    if (event.key === "a") {
        x = x - passo;
    }

    if (event.key === "d") {
        x = x + passo;
    }

    /* limites da área */
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > 975) x = 975;
    if (y > 475) y = 475;

    /* aplica a posição */
    gorila.style.left = x + "px";
    gorila.style.top = y + "px";

    posicao.textContent = "X: " + x + " | Y: " + y;

    // Verifica colisão com bananas
    bananas.forEach(function(banana, idx) {
        if (banana.style.display !== "none") {
            var bx = parseInt(banana.style.left);
            var by = parseInt(banana.style.top);
            // Checa proximidade
            if (Math.abs(x - bx) < 40 && Math.abs(y - by) < 40) {
                banana.style.display = "none";
                pontos++;
                resultado.textContent = "Pontos: " + pontos;
            }
        }
    });
        // Checa colisão com homem
        if (Math.abs(x - hx) < 35 && Math.abs(y - hy) < 35) {
            mensagem.textContent = "O homem pegou o gorila! Fim de jogo.";
            jogoAtivo = false;
            gorila.style.opacity = 0.5;
            homem.style.opacity = 1;
        }
});

