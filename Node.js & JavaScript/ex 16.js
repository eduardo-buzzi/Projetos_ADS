//Faça um algoritmo que verifique três valores que representam os três lados de um triângulo e verifique se são válidos, determine se o triângulo é equilátero, isósceles ou escaleno.

let ladoA = 5;
let ladoB = 5;
let ladoC = 5;

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    if (ladoA === ladoB && ladoB === ladoC) {
        alert("Triângulo equilátero (3 lados iguais).");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        alert("Triângulo isósceles (2 lados iguais).");
    } else {
        alert("Triângulo escaleno (3 lados diferentes).");
    }
} else {
    alert("Os valores informados não formam um triângulo válido.");
}
