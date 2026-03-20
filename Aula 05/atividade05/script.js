// pega o formulário pelo ID e escuta quando ele for enviado
document.getElementById("formulario").addEventListener("submit", function(e) {


// impede o formulário de recarregar a página quando clicar em enviar
e.preventDefault();


// ----------------------
// PEGAR VALORES DOS INPUTS
// ----------------------

// pega o valor digitado no campo nome
let nome = document.getElementById("nome").value;

// pega o valor digitado no campo email
let email = document.getElementById("email").value;

// pega o valor digitado no campo senha
let senha = document.getElementById("senha").value;

// pega o valor digitado na confirmação da senha
let confirmaSenha = document.getElementById("confirma-senha").value;

// pega o valor digitado no cpf
let cpf = document.getElementById("cpf").value;

// pega o valor digitado no telefone
let telefone = document.getElementById("telefone").value;

// pega o valor digitado no cep
let cep = document.getElementById("cep").value;

// pega o valor digitado na data de nascimento
let data = document.getElementById("data-nascimento").value;

// pega o valor digitado no campo valor
let valor = document.getElementById("valor").value;

// pega o valor digitado na url
let url = document.getElementById("url").value;

// pega o valor digitado no cartão
let cartao = document.getElementById("cartao").value;


// pega a div onde aparecerão os resultados
let resultado = document.getElementById("resultado");


// ----------------------
// LIMPAR MENSAGENS
// ----------------------

// limpa todas as mensagens de erro que estão nas tags span
document.querySelectorAll("span").forEach(span => span.textContent = "");

// limpa o resultado mostrado anteriormente
resultado.innerHTML = "";


// ----------------------
// VALIDAÇÃO DO NOME
// ----------------------
let nomeRegex = /^[A-Za-zÀ-ú\s]{3,}$/;

// testa se o nome segue o padrão
if(!nomeRegex.test(nome)){

// se não seguir, mostra erro
document.getElementById("erro-nome").textContent = "Nome inválido";

}else{

// se estiver correto mostra mensagem de sucesso
resultado.innerHTML += "Nome válido: " + nome + "<br>";
}


// ----------------------
// VALIDAÇÃO DO EMAIL
// ----------------------

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailRegex.test(email)){

document.getElementById("erro-email").textContent = "Email inválido";

}else{

resultado.innerHTML += "Email válido: " + email + "<br>";
}


// ----------------------
// VALIDAÇÃO DA SENHA
// ----------------------

// regex que exige:
// pelo menos 1 letra minúscula
// pelo menos 1 letra maiúscula
// pelo menos 1 número
// pelo menos 1 símbolo
// mínimo 8 caracteres
let senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

if(!senhaRegex.test(senha)){

document.getElementById("erro-senha").textContent =
"Senha fraca (mín 8, maiúscula, minúscula, número e símbolo)";

}else if(senha !== confirmaSenha){

// verifica se a senha e confirmação são iguais
document.getElementById("erro-senha").textContent =
"As senhas não coincidem";

}else{

resultado.innerHTML += "Senha válida<br>";
}


// ----------------------
// VALIDAÇÃO DO CPF
// ----------------------

// regex que aceita CPF apenas no formato
// 000.000.000-00
let cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

if(!cpfRegex.test(cpf)){

document.getElementById("erro-cpf").textContent = "CPF inválido";

}else{

resultado.innerHTML += "CPF válido: " + cpf + "<br>";
}


// ----------------------
// VALIDAÇÃO DO TELEFONE
// ----------------------

// regex que aceita telefone no formato
// (00) 00000-0000
let telRegex = /^\(\d{2}\)\s\d{4,5}\-\d{4}$/;

if(!telRegex.test(telefone)){

document.getElementById("erro-telefone").textContent =
"Telefone inválido";

}else{

resultado.innerHTML += "Telefone válido: " + telefone + "<br>";
}


// ----------------------
// VALIDAÇÃO DO CEP
// ----------------------

// formato esperado
// 00000-000
let cepRegex = /^\d{5}\-\d{3}$/;

if(!cepRegex.test(cep)){

document.getElementById("erro-cep").textContent = "CEP inválido";

}else{

resultado.innerHTML += "CEP válido: " + cep + "<br>";
}


// ----------------------
// VALIDAÇÃO DA DATA
// ----------------------

// formato esperado
// dd/mm/aaaa
let dataRegex = /^\d{2}\/\d{2}\/\d{4}$/;

if(!dataRegex.test(data)){

document.getElementById("erro-data-nascimento").textContent =
"Data inválida";

}else{

resultado.innerHTML += "Data válida: " + data + "<br>";
}


// ----------------------
// VALIDAÇÃO DE VALOR
// ----------------------

// formato monetário brasileiro
// exemplo: 1.000,00
let valorRegex = /^\d{1,3}(\.\d{3})*,\d{2}$/;

if(!valorRegex.test(valor)){

document.getElementById("erro-valor").textContent =
"Valor inválido";

}else{

resultado.innerHTML += "Valor válido: " + valor + "<br>";
}


// ----------------------
// VALIDAÇÃO DA URL
// ----------------------

// verifica se começa com http:// ou https://
let urlRegex = /^(https?:\/\/)/;

if(!urlRegex.test(url)){

document.getElementById("erro-url").textContent =
"A URL deve começar com http:// ou https://";

}else{

resultado.innerHTML += "URL válida: " + url + "<br>";
}


// ----------------------
// VALIDAÇÃO DO CARTÃO
// ----------------------

// formato esperado
// 0000 0000 0000 0000
let cartaoRegex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;

if(!cartaoRegex.test(cartao)){

document.getElementById("erro-cartao").textContent =
"Cartão inválido";

}else{


// variável que guarda a bandeira do cartão
let bandeira = "Desconhecida";


// se o cartão começar com 4 → Visa
if(cartao.startsWith("4")){
bandeira = "Visa";
}

// se começar com 5 → Mastercard
else if(cartao.startsWith("5")){
bandeira = "Mastercard";
}


// mostra cartão válido e a bandeira
resultado.innerHTML += "Cartão válido (" + bandeira + "): " + cartao + "<br>";

}

});