function compras(trabalho1, trabalho2) {
    const comprarGame = trabalho1 || trabalho2;
    const comprarPcGamerUltra = trabalho1 && trabalho2;
    // const comprarVideoGame = !!(trabalho1 ^ trabalho2) // operador bitwise xor.
    const comprarVideoGame = trabalho1 != trabalho2;
    const naoComprarGame = !comprarGame; // operador unário.

    return { comprarGame, comprarPcGamerUltra, comprarVideoGame, naoComprarGame }
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));