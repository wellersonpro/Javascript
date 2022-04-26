/*
Conceito de Função
Função em Javascript é First-Class Object (Citizens).
Higher-order function
Javascript é multi-paradigma: Pode implementar procedural, oo e funcional.
*/

// Criando função de forma literal.
function funcao01() { }

// Armazenar função em variável.
const funcao02 = function () { }

// Armazenar função em um array.
const array = [function (a, b) { return a + b}]
console.log(array[0](2, 5));

//Armazenar função em um atributo de objeto.
const obj = {}
obj.falar = function () { return 'Sou um atributo!'}
console.log(obj.falar());