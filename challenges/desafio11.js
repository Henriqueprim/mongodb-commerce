db.produtos.find(
  {
    nome: { $nin: ["Big Mac", "McChicken"] },
  }, 
  { nome: 1,
    curtidas: 1,
    vendidos: 1,
    _id: 0,
  },
);
// Filtra todos os lanches que não sejam Big Mac e McChicken, retornando os nomes, curtidas e vendas.