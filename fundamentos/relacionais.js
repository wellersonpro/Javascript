/*
== compara valor.
=== compara valor e tipo.
!= é diferente.
!== é estritamente diferente.
*/
console.log('01)', '1' == 1);
console.log('02)', '1' === 1);
console.log('03)', '3' != 3);
console.log('04)', '3' !== 3);

console.log('05)', 3 < 2); // 3 é menor que 2.
console.log('06)', 3 > 2); // 3 é maior que 2.
console.log('07)', 3 <= 2); // 3 é menor ou igual à 2.
console.log('08)', 3 >= 2); // 3 é maior ou igual à 2.

const d1 = new Date(0);
const d2 = new Date(0);
console.log('09)', d1 === d2); // == ou === não faz diferença já que está comparando endereço de memôria.
console.log('10)', d1 == d2);
console.log('11)', d1.getTime() === d2.getTime()); // Por serem numbers eles são estritamente iguais, usando == ou ===.

console.log('12)', undefined == null);
console.log('13)', undefined === null); 