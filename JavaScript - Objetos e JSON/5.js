// Exercício 5: Simulando uma conta bancária.
console.log("--- Exercício 5 ---");

// Criando o objeto contaBancaria
const contaBancaria = {
  titular: "Felipe Rotermel",
  saldo: 1000,
  depositar: function(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
  },
  sacar: function(valor) {
    if (valor > this.saldo) {
      console.log(`Saldo insuficiente para sacar R$${valor.toFixed(2)}. Saldo atual: R$${this.saldo.toFixed(2)}`);
    } else {
      this.saldo -= valor;
      console.log(`Saque de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
    }
  }
};

// Criando o objeto cliente
const cliente = {
  nome: "Felipe Rotermel",
  conta: contaBancaria
};

// Função para mostrar o saldo do cliente
function mostrarSaldo(clienteInfo) {
  console.log(`\nConsulta de Saldo:`);
  console.log(`Cliente: ${clienteInfo.nome}`);
  // Acessando o saldo através do objeto aninhado
  console.log(`Saldo da conta: R$${clienteInfo.conta.saldo.toFixed(2)}`);
}

// Demonstração
mostrarSaldo(cliente); // Mostra o saldo inicial
cliente.conta.depositar(500); // Deposita um valor
cliente.conta.sacar(200); // Saca um valor
cliente.conta.sacar(1500); // Tenta sacar um valor maior que o saldo
mostrarSaldo(cliente); // Mostra o saldo final