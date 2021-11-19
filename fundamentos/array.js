const valores = [7.7, 8.9, 6.3, 9.2]; // Array com valores númericos.
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);
console.log(valores.length); // Retorna quantos elementos tem no array.

valores.push({ id: 3 }, false, null, 'teste'); // adiciona valores ao array.
console.log(valores);

console.log(valores.pop()); // Retorna o último valor do array.
delete valores[0]; // Retira o valor de índice 0 do array. Funciona em contexto de objeto.
console.log(valores);

console.log(typeof valores);