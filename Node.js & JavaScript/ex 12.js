let valor = 3000;
let codigo = 2;
let valorFinal = 0;

switch (codigo) {
    case 1: valorFinal = valor * 0.85; break;
    case 2: valorFinal = valor * 0.90; break;
    case 3: valorFinal = valor; break;
    case 4: valorFinal = valor * 1.10; break;
    default: valorFinal = valor; break;
}
console.log("Valor final a pagar:", valorFinal);
