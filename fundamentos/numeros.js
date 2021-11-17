const peso1 = 1.0;
const peso2 = Number('2.0'); // Outra maneira de criar um número.

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // Verifica se o número é inteiro, e ele pode ser inteiro mesmo com ponto flutuante(.)
console.log(Number.isInteger(peso2));

const avaLiacao1 = 9.871;
const avaLiacao2 = 6.871;

const total = avaLiacao1 * peso1 + avaLiacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // toFixed define a quantidade de casas decimais.
console.log(media.toString(2)); // Converte em binário.
console.log(typeof media);
console.log(typeof Number);