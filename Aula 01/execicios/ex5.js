let capital = Number(prompt("digite o capital inicial"));
let taxa = Number(prompt("digite a taxa de juros mensal"));
let tempo = Number(prompt("digite o tempo em meses"));

let i = taxa / 100;
let montante = capital * (1 + i) ** tempo;

alert(montante)
