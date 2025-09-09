// Exercício 1: Criando um objeto pessoa e uma função para mostrar suas informações.
console.log("--- Exercício 1 ---");
const pessoa = {
  nome: "Felipe Rot",
  idade: 90,
  solteiro: true,
  hobbies: ["Esportes", "Caminhada", "Estudar"]
};

function mostrarInfoPessoa(objPessoa) {
  console.log("Informações da Pessoa:");
  console.log(`- Nome: ${objPessoa.nome} (Tipo: ${typeof objPessoa.nome})`);
  console.log(`- Idade: ${objPessoa.idade} (Tipo: ${typeof objPessoa.idade})`);
  console.log(`- Solteiro: ${objPessoa.solteiro} (Tipo: ${typeof objPessoa.solteiro})`);
  // Dica: usando o método join() para exibir o array como texto.
  console.log(`- Hobbies: ${objPessoa.hobbies.join(", ")} (Tipo: ${typeof objPessoa.hobbies})`);
}

mostrarInfoPessoa(pessoa);

console.log("\n--------------------\n");

// Exercício 2: Adicionando um endereço e atualizando a função.
console.log("--- Exercício 2 ---");

// Adicionando a propriedade 'endereco' ao objeto 'pessoa'
pessoa.endereco = {
  rua: "Rua Floripa",
  cidade: "Bluemnau",
  estado: "Sc"
};

// Modificando a função para incluir o endereço.
function mostrarInfoPessoaAtualizada(objPessoa) {
  console.log("Informações Atualizadas da Pessoa:");
  console.log(`- Nome: ${objPessoa.nome}`);
  console.log(`- Idade: ${objPessoa.idade}`);
  console.log(`- Solteiro: ${objPessoa.solteiro}`);
  console.log(`- Hobbies: ${objPessoa.hobbies.join(", ")}`);
  
  // Verificando se o endereço existe antes de tentar acessá-lo
  if (objPessoa.endereco) {
    console.log("- Endereço:");
    console.log(`  - Rua: ${objPessoa.endereco.rua}`);
    console.log(`  - Cidade: ${objPessoa.endereco.cidade}`);
    console.log(`  - Estado: ${objPessoa.endereco.estado}`);
  }
}

// Chamando a nova função para verificar as informações atualizadas.
mostrarInfoPessoaAtualizada(pessoa);