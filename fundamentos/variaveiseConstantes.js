var a = 3; // palavra reservada var que declara variáveis.
let b = 4; // palavra reservada let(mais moderna) que declara variáveis.

var a = 30; // Palavra var pode ser incluída ou não durante uma alteração.
b = 40; // No caso do let, ele não pode ser incluído durante uma alteração.

console.log(a, b);

a = 300;
b = 400;
console.log(a, b);

const c = 5; // palavra reservada const que declara variáveis constantes(seu valor não pode ser alterado).
c = 50;
console.log(c);