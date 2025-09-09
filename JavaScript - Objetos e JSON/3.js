// Exercício 3: Criando e manipulando uma lista de pessoas.
console.log("--- Exercício 3 ---");

// Criando a lista inicial de pessoas
const pessoas = [
  { nome: "Felipe Eduardo", idade: 12, cidade: "Rio de Janeiro" },
  { nome: "Felipe Roet", idade: 13, cidade: "Santa Catarina" },
  { nome: "Felipe Christian Jr", idade: 9, cidade: "Acre" }
];

// a) Função para mostrar a lista de pessoas
function mostrarListaPessoas(lista) {
  console.log("\nLista de Pessoas:");
  lista.forEach(pessoa => {
    console.log(`- Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
  });
}

// Chamada inicial da função
mostrarListaPessoas(pessoas);

// b) Adicionando uma nova pessoa à lista
console.log("\nAdicionando uma nova pessoa...");
const novaPessoa = { nome: "Juliana Silva Jr", idade: 31, cidade: "Fortaleza" };
pessoas.push(novaPessoa);

// c) Chamando a função novamente para verificar a adição
console.log("Verificando a lista atualizada:");
mostrarListaPessoas(pessoas);

// d) Função para filtrar pessoas por cidade
function filtrarPorCidade(lista, cidade) {
  return lista.filter(pessoa => pessoa.cidade === cidade);
}

// Chamando a função de filtro e imprimindo o resultado
console.log("\nFiltrando pessoas que moram em 'Salvador':");
const pessoasDeSalvador = filtrarPorCidade(pessoas, "Salvador");
console.log(pessoasDeSalvador);