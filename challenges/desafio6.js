db.produtos.find(
  {
    curtidas: { $gt: 10, $lt: 100 }, 
  }, 
  { nome: 1,
    curtidas: 1,
    _id: 0,
  },
);
// Filtra os lanches com numero de curtidas maiores que 10 e menores que 100, retornando seus nomes e numero de curtidas.