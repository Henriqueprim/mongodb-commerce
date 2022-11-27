db.produtos.find({ vendidos: { $gt: 50, $lt: 100 } }, { nome: 1, vendidos: 1, _id: 0 })
.sort({ vendidos: 1 });
// Procura por todos os produtos que tenham uma venda maior que 50 e menor que 100, exibindo apenas o nome e a quantidade de vendas, organizado em ordem crescente.