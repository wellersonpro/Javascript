// IF ELSE.

const imprimirResultado = function(nota) {
    if (nota >= 8) {
        console.log('Aprovado!');
    } else {
        console.log('Reprovado!');
    }
}

imprimirResultado(10);
imprimirResultado(5);
imprimirResultado('9'); // Linguagem fracamente tipada, vai tentar interpretar mesmo sendo string.


console.log('=======================================');
console.log('');
console.log('IF ELSE IF 02')
// IF ELSE IF.

Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim;
}

const resultado = function(nota) {
    if (nota.entre(9, 10)) {
        console.log('Ótima nota');
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado');
    } else if(nota.entre(4, 6.99)) {
        console.log('Recuperação');
    } else if(nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota Inválida');
    }

}

resultado(10);
resultado(8);
resultado(11);