db.resumoProdutos.insertOne(
  {
    franquia: "McDonalds",
    totalProdutos: db.produtos.countDocuments({}),
  },
);

db.resumoProdutos.find(
  {},
  {
    franquia: 1,
    totalProdutos: 1,
    _id: 0,
  },
);

// Cria a coleção 'resumoProdutos' adicionando os campos 'franquia' com o valor "McDonalds" e o campo 'totalProdutos' com o valor sendo a soma de todos os produtos na coleção 'produtos'. Por fim retona esses valores.