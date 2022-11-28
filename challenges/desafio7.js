db.produtos.find(
  {
    curtidas: { $ne: 50 },
    tags: { $exists: false },
  },
  {
    nome: 1,
    vendidos: 1,
    _id: 0,
  },
);
// Filtra os lanches com curtidas diferentes de 50 e que não tenham tags, retornando seus nomes e o numero de vendas.