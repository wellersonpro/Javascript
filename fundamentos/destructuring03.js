function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = {max: 50, min: 30};
console.log(rand(obj)); // Gera números aleatórios entre 30 e 50.
console.log(rand({min: 955})); // Gera números aleatórios entre 955 e 1000.