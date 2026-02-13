function alterarDiv() {
    let div = document.getElementById("conteudo");

    div.innerHTML = "olha mudou de cor!";


    div.style.backgroundColor = "lightblue";


    console.log(div.innerHTML);
}
