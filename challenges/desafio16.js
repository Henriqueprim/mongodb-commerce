db.produtos.updateOne(
  {
    nome: { $eq: "Big Mac" },
  },
  {
    $currentDate: { ultimaModificacao: { $type: "timestamp" } },
  },
);

db.produtos.find(
  {
    ultimaModificacao: { $exists: true },
  },
  {
    nome: 1,
    _id: 0,
  },
);

// Adiciona ao lanche "Big Mac" o campo 'ultimaModificação' com o tipo 'timestamp' usando a data corrente. Por fim retorna o nome dos lanches em que o campo 'ultimaModificacao' existe.