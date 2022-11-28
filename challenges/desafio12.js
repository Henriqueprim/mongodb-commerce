db.produtos.updateMany(
  {
    $nor: [
      { nome: { $eq: "McChicken" } },
      { ingredientes: { $elemMatch: { $eq: "ketchup" } } },
    ] },
  {
    $push: { ingredientes: "ketchup" },
  },
);

db.produtos.find({}, {
  nome: 1,
  ingredientes: 1,
  _id: 0,
});

// Antes de fazer o update é verificado se o lanche não é o McChicken ou se já há ketchup na lista de ingredientes, não havendo problemas ele é inserido na lista. Em seguida é retornado o nome e a lista de ingredientes de todos os lanches.