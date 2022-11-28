db.produtos.find(
  {
    ingredientes: { $elemMatch: { $eq: "picles" } },
  },
  {
    nome: 1,
    ingredientes: 1,
    valoresNutricionais: { $slice: 3 },
    _id: 0,
  },
);
// Filtra os lanches que contém picles na lista de ingredientes e retorna seus nomes, ingredientes e os 3 primeiros valores nutricionais.