//Francisco tem 1,50m e cresce 2 centímetros por ano, enquanto Sara tem 1,10m e cresce 3 centímetros por ano. Faça um algoritmo que calcule e imprima na tela em quantos anos serão necessários para que Sara seja maior que Francisco.

let francisco = 150; // altura em cm
let sara = 110;      // altura em cm
let anos = 0;

while (sara <= francisco) {
    francisco += 2; // cresce 2 cm por ano
    sara += 3;      // cresce 3 cm por ano
    anos++;
}

console.log("Sara será mais alta que Francisco em " + anos + " anos.");
