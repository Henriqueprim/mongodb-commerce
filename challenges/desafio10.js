db.produtos.find(
  {
    valoresNutricionais: { $elemMatch: { tipo: "proteínas", percentual: { $gte: 30, $lte: 40 } },
  } },
  {
    nome: 1,
    _id: 0,
  },
);
// Procura dentro do array de Valores Nutricionais os elementos do tipo proteína em que o percentual seja menor que 40 e maior que 30 e retorna seus nomes.