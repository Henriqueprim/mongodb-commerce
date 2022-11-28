db.produtos.find(
  {
     $or: [{ curtidas: { $eq: 36 } }, { vendidos: { $eq: 85 } }],
  }, 
  { nome: 1,
    curtidas: 1,
    vendidos: 1,
    _id: 0,
  },
);
// Filtra os produtos que atendem às regras e os retorna mostrando seu nome, numero de curtidas e numero de vendas.