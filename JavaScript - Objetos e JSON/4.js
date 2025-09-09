// Exercício 4: Criando um objeto calculadora.
console.log("--- Exercício 4 ---");

const calculadora = {
  soma: function(a, b) {
    return a + b;
  },
  subtracao: function(a, b) {
    return a - b;
  },
  multiplicacao: function(a, b) {
    return a * b;
  },
  divisao: function(a, b) {
    if (b === 0) {
      return "Erro: Divisão por zero não é permitida.";
    }
    return a / b;
  }
};

// a) Chamando cada método e imprimindo os resultados
console.log("Resultados dos métodos da calculadora:");
console.log(`Soma (10 + 5): ${calculadora.soma(10, 5)}`);
console.log(`Subtração (20 - 8): ${calculadora.subtracao(20, 8)}`);
console.log(`Multiplicação (7 * 6): ${calculadora.multiplicacao(7, 6)}`);
console.log(`Divisão (15 / 3): ${calculadora.divisao(15, 3)}`);
console.log(`Divisão (10 / 0): ${calculadora.divisao(10, 0)}`);

console.log("\n--------------------\n");

// b) Adicionando o método para calcular média
calculadora.calcularMedia = function(numeros) {
  if (numeros.length === 0) {
    return 0;
  }
  const somaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  return somaTotal / numeros.length;
};

// c) Chamando o novo método e imprimindo o resultado
const meusNumeros = [10, 20, 30, 40, 50];
console.log("Calculando a média de uma lista de números:");
console.log(`A média de [${meusNumeros.join(", ")}] é: ${calculadora.calcularMedia(meusNumeros)}`);

const outrosNumeros = [5, 5, 10, 10];
console.log(`A média de [${outrosNumeros.join(", ")}] é: ${calculadora.calcularMedia(outrosNumeros)}`);