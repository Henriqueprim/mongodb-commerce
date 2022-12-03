db.produtos.countDocuments(
  {
    nome: { $regex: /mc/i },
  },
  );
// Faz a contagem de todos os documentos que tenham 'mc' no nome, sendo uma pesquisa não case sensitive.
