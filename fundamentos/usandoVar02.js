var numero = 1;
{
    var numero = 2 // Var não tem escopo de bloco
    console.log('dentro =', numero);
}
console.log('fora =', numero);