db.produtos.countDocuments(
  {
    ingredientes: { $size: 4 },
  },
  );
// Faz a contagem de todos os documentos que tenham 4 ingredientes, buscando pelo tamanho do array.
