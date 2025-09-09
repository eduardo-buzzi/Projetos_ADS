let peso = 95;
let altura = 1.90;
let imc = peso / (altura ** 2);
let condicao = "";

if (imc < 18.5) condicao = "Abaixo do peso";
else if (imc <= 24.9) condicao = "Peso ideal";
else if (imc <= 29.9) condicao = "Levemente acima do peso";
else if (imc <= 34.9) condicao = "Obesidade grau I";
else if (imc <= 39.9) condicao = "Obesidade grau II";
else condicao = "Obesidade grau III";

console.log("IMC:", imc.toFixed(2), "-", condicao);
