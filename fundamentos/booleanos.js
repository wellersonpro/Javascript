let isAtivo = false; 
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);
/*
!true transforma o true em false.
!!true quebra a primeira negação(!) e volta à true.
*/



console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'Texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('pra finalizar...');
console.log(!!('' || null || 0 || ' ')); // Ao encontrar o primeiro verdadeiro, vai retornar true.

let nome = '';
console.log(nome || 'Desconhecido'); // Retorna o que for true.