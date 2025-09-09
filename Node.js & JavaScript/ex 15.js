let anoNascimento = 1094
let anoAtual = 2025

let diasTotais = (anoAtual - anoNascimento) * 365;

let anos = Math.floor(diasTotais / 365);
let meses = Math.floor((diasTotais % 365) / 30);
let dias = (diasTotais % 365) % 30;

console.log(`Você viveu: ${anos} anos, ${meses} meses e ${dias} dias.`);
