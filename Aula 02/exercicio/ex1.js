function alterarConteudo() {
    // Obter a div pelo id
    const div = document.getElementById("conteudo");
    
    // 1. Adicionar texto à div
    div.innerHTML = "Conteúdo alterado com sucesso!";
    
    // 2. Mudar a cor de fundo usando style.backgroundColor
    div.style.backgroundColor = "#4CAF50";
    
    // 3. Imprimir no console o conteúdo da div
    console.log(document.getElementById("conteudo").innerHTML);
} 
