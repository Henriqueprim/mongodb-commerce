db.produtos.updateMany(
  {},
  {
    $pull: { ingredientes: "cebola" },
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

// Atualiza todos os lanches tirando da lista de ingredientes o item 'cebola'. Por fim retorna os nomes e ingredientes dos produtos.