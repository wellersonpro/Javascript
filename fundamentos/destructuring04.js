function rand([min = 0, max = 1000]) {
    if (min > max ) [min, max] = [max, min]; // Se mínimo for maior que máximo, inverta os valores.
    // Math.random(gera números aleatórios de 0 até 0,99), exemplo: Math.random(0.2) * 10 + 40 = retorna número 42.
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor); // Arredonda para baixo.
}

// Gerando valores aleatórios.
console.log(rand([50, 40])); // max: 50 e min: 40.
console.log(rand([992])); // max assumi 1000 por padrão, min: 992.
console.log(rand([, 10])); // atribui 10 ao segundo valor do array.
console.log(rand([])); // Assumi os valores padrões.