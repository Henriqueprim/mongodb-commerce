db.produtos.updateMany(
  {},
  {
    $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] },
  },
);

db.produtos.updateOne(
  {
    nome: "Big Mac",
  },
  {
    $inc: { "vendasPorDia.3": +60 }
  }
);

db.produtos.updateMany(
  {
    tags: { $eq: "bovino" },
  },
  {
    $inc: { "vendasPorDia.6": +120 },
  },
);

db.produtos.find(
  {},
  {
    nome: 1,
    vendasPorDia: 1,
    _id: 0,
  },
);

// Cria o campo 'vendasPorDia' e atribui a ele um array de 7 posições representando os 7 dias da semana. Depois atribui certos valores a sanduíches específicos e em dias específicos e por fim retorna os nomes e valores de 'vendasPorDia'.