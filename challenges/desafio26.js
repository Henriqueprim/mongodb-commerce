db.produtos.updateMany(
  {
    valoresNutricionais: {
      $elemMatch: {
        tipo: "sódio",
        percentual: { $lt: 40, $gt: 20 },
      },
    },
  },
  {
    $push: {
      tags: "contém sódio",
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
// Procura os elementos do tipo 'sódio' com valor do percentual maior que 20 e menor que 40 e adiciona a tag "contém sódio" ao final do array de tags. Por fim retorna o nome e as tags de cada produto.
