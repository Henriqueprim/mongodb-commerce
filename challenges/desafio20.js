db.produtos.updateOne(
  {
    nome: "Quarteirão com Queijo",
  },
  {
    $pop: { ingredientes: -1 },
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
// Usando o operador $pop é retirado o primeiro item do array de ingredientes. Por fim retornado o nome e o array de ingredientes.