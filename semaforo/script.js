const leds = {
    'vermelho': document.getElementById('ledVermelho'),
    'amarelo': document.getElementById('ledAmarelo'),
    'verde': document.getElementById('ledVerde')
};

function enviarComando(modo) {
    fetch(`semaforo.php?modo=${modo}`)
        .then(response => console.log(`Comando ${modo} enviado!`))
        .catch(err => console.error("Erro ao enviar comando:", err));;
}

document.getElementById('lento').addEventListener('click', () => enviarComando("lento"));
document.getElementById('medio').addEventListener('click', () => enviarComando('medio'));
document.getElementById('rapido').addEventListener('click', () => enviarComando('rapido'));