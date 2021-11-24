let valor // não inicializada
console.log(valor);


valor = null; //ausência de valor
console.log(valor);
// console.log(valor.toString()); // Erro!


const produto = {};
console.log(produto.preco); // É possível acessar o preço(indefinido) desde que o que venha antes esteja definido.
console.log(produto);


produto.preco = 3.50; //adicionando chave = valor
console.log(produto);


produto.preco = undefined; // evite atribuir undefined.
console.log(!!produto.preco);
delete produto.preco
console.log(produto);


produto.preco = null; // sem preço
console.log(!!produto.preco);
console.log(produto);