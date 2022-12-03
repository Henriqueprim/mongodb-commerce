db.produtos.updateMany(
  {
    valoresNutricionais: {
      $elemMatch: {
        tipo: "sódio",
        percentual: { $gte: 40 },
      },
    },
  },
  {
    $push: {
      tags: "muito sódio",
    },
  },
);

db.produtos.find(
  {},
  {
    nome: 1,
    tags: 1,
    _id: 0,
  },
);
// Procura os elementos do tipo 'sódio' com valor maior que 40 e adiciona a tag "muito sódio" ao final do array de tags. Por fim retorna o nome e as tags de cada produto.
