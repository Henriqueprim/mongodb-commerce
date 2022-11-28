db.produtos.updateOne(
  {
    nome: "Cheddar McMelt",
  },
  {
    $pop: { ingredientes: 1 },
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
// Usando o operador $pop é retirado o último item do array de ingredientes. Por fim retornado o nome e o array de ingredientes.