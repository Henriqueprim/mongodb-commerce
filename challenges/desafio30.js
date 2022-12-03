db.produtos.updateOne(
  { 
    nome: "Big Mac",
  },
  { 
    $unset: { curtidas: "" },
  },
);

db.produtos.find(
  {},
  {
    nome: 1,
    curtidas: 1,
    _id: 0,
  },
);
// Remove apenas do "Big Mac" o campo 'curtidas'. Por fim retorna os nomes dos produtos e os campos 'curtidas', menos do "Big Mac" já que ele não tem mais.
