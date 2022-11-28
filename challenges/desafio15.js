db.produtos.updateMany(
  {},
  {
    $set: { avaliacao: 0 },
  },
);

db.produtos.updateMany(
  {
    tags: { $eq: "bovino" },
  },
  { 
    $inc: { avaliacao: +5 },
  },
);

db.produtos.updateMany(
  {
    tags: { $eq: "ave" },
  },
  { 
    $inc: { avaliacao: +3 },
  },
);

db.produtos.find(
  {},
  {
    nome: 1,
    avaliacao: 1,
    _id: 0,
  },
);

// Cria o campo "Avaliação" setando seu valor base em 0, em seguida aumenta os valores de acordo com as tags "bovino" ou "ave", dando valores diferentes pra cada tag. Por fim exibe os nomes dos lanches e suas avaliações.