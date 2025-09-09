// Exercício 1: Criando e exibindo um objeto livro.
console.log("--- Exercício 1 ---");
const livro1 = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  anoPublicacao: 1954,
  genero: "Fantasia"
};
console.log("Detalhes do Livro 1:");
console.log(`Título: ${livro1.titulo}`);
console.log(`Autor: ${livro1.autor}`);
console.log(`Ano de Publicação: ${livro1.anoPublicacao}`);
console.log(`Gênero: ${livro1.genero}`);

console.log("\n--------------------\n");

// Exercício 2: Adicionando e calculando a idade de publicação.
console.log("--- Exercício 2 ---");
const anoAtual = new Date().getFullYear();
const livro2 = {
  titulo: "1984",
  autor: "George Orwell",
  anoPublicacao: 1949,
  genero: "Distopia"
};

// Adicionando a propriedade idadePublicacao diretamente ao objeto.
livro2.idadePublicacao = anoAtual - livro2.anoPublicacao;

// Criando a string com os detalhes.
const mostrarDetalhes = `
Detalhes do Livro 2:
Título: ${livro2.titulo}
Autor: ${livro2.autor}
Ano de Publicação: ${livro2.anoPublicacao}
Gênero: ${livro2.genero}
Idade de Publicação: ${livro2.idadePublicacao} anos
`;
console.log(mostrarDetalhes);

console.log("\n--------------------\n");

// Exercício 3: Acessando propriedades com colchetes.
console.log("--- Exercício 3 ---");
const livro3 = {
  titulo: "Cem Anos de Solidão",
  autor: "Gabriel García Márquez",
  "ano de publicacao": 1967, // Usando string na chave para demonstrar
  genero: "Realismo Mágico",
  "idade de publicacao": anoAtual - 1967
};
console.log("Acessando dados do Livro 3 com colchetes:");
console.log(`Título: ${livro3['titulo']}`);
console.log(`Autor: ${livro3['autor']}`);
console.log(`Ano de Publicação: ${livro3['ano de publicacao']}`);
console.log(`Gênero: ${livro3['genero']}`);
console.log(`Idade de Publicação: ${livro3['idade de publicacao']} anos`);

console.log("\n--------------------\n");

// Exercício 4: Adicionando e verificando a propriedade 'avaliacao'.
console.log("--- Exercício 4 ---");
const livro4 = {
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  anoPublicacao: 1899,
  genero: "Realismo",
  idadePublicacao: anoAtual - 1899,
  avaliacao: null // Propriedade inicializada como null
};

console.log("Verificando e atribuindo avaliação...");
if (livro4.avaliacao === null) {
  livro4.avaliacao = { nota: 4.8, comentario: "Uma obra-prima da literatura brasileira." };
  console.log("Avaliação adicionada com sucesso!");
  console.log(livro4.avaliacao);
} else {
  console.log("Este livro já possui uma avaliação.");
}

// Verificação secundária para a segunda parte da condição
console.log("\nTentando avaliar novamente...");
if (livro4.avaliacao === null) {
    livro4.avaliacao = { nota: 5.0, comentario: "Excelente." };
} else {
    console.log("Este livro já possui uma avaliação.");
}


console.log("\n--------------------\n");

// Exercício 5: Alterando uma propriedade.
console.log("--- Exercício 5 ---");
const livro5 = {
  titulo: "O Guia do Mochileiro das Galáxias",
  autor: "Douglas Adams",
  anoPublicacao: 1979,
  genero: "Ficção Científica",
  idadePublicacao: anoAtual - 1979
};
console.log(`Gênero original: ${livro5.genero}`);
livro5.genero = "Aventura";
console.log(`Gênero alterado: ${livro5.genero}`);
console.log(livro5);


console.log("\n--------------------\n");

// Exercício 6: Excluindo uma propriedade.
console.log("--- Exercício 6 ---");
const livro6 = {
  titulo: "JS Senai Blumenau",
  autor: "Felipe",
  anoPublicacao: 2025,
  genero: "Estudo",
  idadePublicacao: anoAtual - 2025,
  avaliacao: { nota: 4.5, comentario: "Muito relevante." }
};
console.log("Objeto antes de excluir a propriedade 'avaliacao':");
console.log(livro6);

delete livro6.avaliacao;

console.log("\nObjeto após excluir a propriedade 'avaliacao':");
console.log(livro6);