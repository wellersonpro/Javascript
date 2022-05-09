console.log('ESTRUTURA IF 01...')
// ESTRUTURA IF 01.

function resultadoFinal(nota) {
    if (nota >= 7) {
        console.log(`Aprovado com ${nota}`);
    }
}

resultadoFinal(8.1);
resultadoFinal(6.1);

function resultado(valor) {
    if (valor) {
        console.log('Verdadeiro...' + valor);
    }
}

// False
resultado();
resultado(null);
resultado(undefined);
resultado(NaN);
resultado('');
resultado(0);

// True
resultado(-1);
resultado(' ');
resultado('?');
resultado([]);
resultado([1, 2]);
resultado({});




console.log('');
console.log('=======================================');
console.log('ESTRUTURA IF 02...');


// ESTRUTURA IF 02.

function teste1(num) {
    if (num > 7)             // Com apenas uma linha, as chaves são opcionais.
        console.log(num);
    console.log('Final');
}

//teste1(6);
//teste1(8);

function teste2(num) {
    if (num > 7); {          // Cuidado ao usar ';' em estruturas de controle.
        console.log(num);
    }
}

teste2(6);
teste2(8);