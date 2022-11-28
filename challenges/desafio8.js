db.produtos.deleteMany(
  {
    curtidas: { $lt: 50 },
  },
);

db.produtos.find({},
  {
    nome: 1,
    _id: 0,
});

// Deleta todos os lanches com menos de 50 curtidas e em seguida procura por todos os lanches restantes retornando seus nomes.