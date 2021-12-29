console.log('EXEMPLO USANDO FOR');
let contar = 1;
for (let contar = 1; contar <= 5; contar++) { // let contar recebe 1, imprimi no console enquanto for menor ou igual à 5 e ganha mais 1.
    console.log(`contando: ${contar}`);
}




console.log('');
console.log('EXEMPLO USANDO FOR/IN');

const pessoa = {
    nome: 'Lara',
    idade: 32
}

for (let percorrer in pessoa) {
    console.log(`${percorrer}: ${pessoa[percorrer]}`); // Percorre todos os atributos do objeto.
}