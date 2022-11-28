db.produtos.updateMany(
  {},
  {
    $set: { criadoPor: "Ronald McDonald" },
  },
);

db.produtos.find(
  {},
  {
    nome: 1,
    criadoPor: 1,
    _id: 0,
  },
);

// Faz um update em todos os documentos setando o valor de "criadoPor" em Ronald McDonald. Como não existe esse campo, ele é criado. Em seguida é retornado os nomes dos lanches e o campo "criadoPor".