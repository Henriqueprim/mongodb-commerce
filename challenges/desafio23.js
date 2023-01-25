db.produtos.updateMany(
  {},
  {
    $push: {
      tags: {
        $each: ["combo", "tasty"],
        $sort: 1,
      },
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
// Adiciona ao array de tags de todos os sanduíches "combo" e "tasty", organiza os valores por ordem alfabética ascendente e por fim retorna os nomes e o array de tags de todos os sanduíches.