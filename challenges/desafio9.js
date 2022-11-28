db.produtos.find(
  {
    valoresNutricionais: { $elemMatch: { tipo: "calorias", quantidade: { $lt: 500 } },
  } },
  {
    nome: 1,
    _id: 0,
  },
);
// Procura dentro do array de Valores Nutricionais os elementos do tipo caloria em que a quantidade seja menor que 500 e retorna seus nomes.