db.produtos.updateMany(
  {
    nome: { $in: ["Big Mac", "Quarteirão com Queijo"] },
  },
  {
    $push: { ingredientes: "bacon" },
  },
);

db.produtos.find(
  {},
  {
    nome: 1,
    ingredientes: 1,
    _id: 0,
  },
);
// Nos lanches 'Big Mac' e 'Quarteirão com Queijo' é adicionado o ingrediente "bacon". Por fim retorna o nome e os ingredientes.