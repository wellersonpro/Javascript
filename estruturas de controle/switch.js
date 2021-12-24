const resultado = function (nota) {
    switch (Math.round(nota)){
    case 10:
    case 9:
        console.log('Quadro de Honra');
        break
    case 8:
    case 7:
        console.log('Aluno Aprovado');
        break
    case 6:
    case 5:
    case 4:
        console.log('Aluno em Recuperação');
        break
    case 3:
    case 2:
    case 1:
    case 0:
        console.log('Aluno Reprovado');
        break
        default:
        console.log('Nota Inválida');
    }
}

// Informando a nota do parâmetro "nota".
resultado(10);
resultado(6.2);
resultado(5);
resultado(2);
resultado(-2);