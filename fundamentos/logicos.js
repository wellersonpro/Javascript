function compras(trabalho1, trabalho2) {
    const comprarGame = trabalho1 || trabalho2; // trabalho1 OU trabalho 2 precisa ser true para comprar um game.
    const comprarTv50 = trabalho1 && trabalho2; // trabalho1 E trabalho2 precisa ser true para comprar Tv50.
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // operador bitwise xor.
    const comprarTv32 = trabalho1 != trabalho2; // trabalho1 precisa ser diferente de trabalho2 para comprar Tv32.
    const naoComprarGame = !comprarGame; // operador unário, transforma true em false.

    return { comprarGame, comprarTv50, comprarTv32, naoComprarGame }
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));