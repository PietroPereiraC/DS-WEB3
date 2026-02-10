// Maniouação de DOM

// Usando o InnerHTML
document.getElementById("conteudo").innerHTML = "<p>Olá, Mundo!</p>";

var valor = document.getElementById("conteudo").innerHTML;
console.log(valor);

//Usando o setAributte e o getAtributte
document.getElementById("foto").setAttribute("src","messi.gif");

console.log(document.getElementById("foto").getAttribute("src"));

// Alterando propriedades CSS
document.getElementById("conteudo").style.backgroundColor = "lightblue";
document.getElementById("foto").style.width = "500px";

function mudatamanho(){
    document.getElementById("foto").style.width = "200px";
}
function voltatamanho(){
    document.getElementById("foto").style.width = "500px";
}