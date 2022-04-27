console.log(19.9 * 0.6);

let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto); // Calcula o seguinte: preço x 0.6(resto de 1 - desconto) que retorna o preço com 40% de desconto.
console.log(precoComDesconto);

let nome = "Caderno"; // String(Texto) -> sequencia de símbolos.
let categoria = "Papelaria";
console.log("Produto: " + nome + ", Categoria: " + categoria + ", Preço: " + preco + ", Desconto: " + desconto); // Concatenação de Strings e variáveis.
console.log(`Produto: ${nome}, Categoria: ${categoria}, Preço: ${preco}, Desconto: ${desconto}`); // Concatenação com Template Strings.


console.log(1 + 1); // Soma.
console.log("1" + 1); // Concatenação.
