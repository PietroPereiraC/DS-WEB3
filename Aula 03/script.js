var contadorItem = 0;

function adicionar(){
    contadorItem++;
    let novoItem = document.createElement("li");
    novoItem.textContent = contadorItem + " - " + prompt("Digite o nome do item:");
    novoItem.setAttribute("id",contadorItem);

    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.setAttribute("onclick","removerItem("+contadorItem+")");
    novoItem.appendChild(botaoRemover);

    document.getElementById("lista").appendChild(novoItem);
}

function removerItem(idItem){
    let item = document.getElementById(idItem);
    document.getElementById("lista").removeChild(item);
}
    let item1 = document.getElementById("item1");
    document.getElementById("lista").removeChild(item1);

    
