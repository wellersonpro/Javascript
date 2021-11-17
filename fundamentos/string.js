const escola = "Cod3r"

console.log(escola.charAt(4)); // Retorna a letra que está no índice 4.
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3)); // Retorna o código do caracter.
console.log(escola.indexOf('d')); // Retorna a posição do índice d.

console.log(escola.substring(1)); // Retorna do índice 1 pra frente.
console.log(escola.substring(0, 3)); // Retorna do índice 0 até 3 sem incluir o 3.

console.log('Escola '.concat(escola).concat("!")); // Retorna o literal "escola" e concatena + const escola + o literal "!".
console.log(escola.replace(3, 'e')); // Substitui o índice de posição 3 pela letra "e".

console.log('Ana,Maria,Pedro'.split(',')); // Transforma o texto string em array.