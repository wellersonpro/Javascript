function rand([min = 0, max = 1000]) {
    if (min > max ) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

// Gerando valores aleatórios.
console.log(rand([50, 40])); // max: 50 e min: 40.
console.log(rand([992])); // max assumi 1000 por padrão, min: 992.
console.log(rand([, 10])); // atribui 10 ao segundo valor do array.
console.log(rand([])); // Assumi os valores padrões.