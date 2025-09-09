//Faça um algoritmo que leia uma temperatura em Fahrenheit e calcule a temperatura correspondente em grau Celsius. Imprima na tela as duas temperaturas. Fórmula: C = (5 * ( F-32) / 9)

let fahrenheit = 68; 
let celsius = (5 * (fahrenheit - 32) / 9);

console.log("Temperatura em Fahrenheit: ", fahrenheit , "°F");
console.log("Temperatura em Celsius: ", celsius.toFixed(2) , "°C");
