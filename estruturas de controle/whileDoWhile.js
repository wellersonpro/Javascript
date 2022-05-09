// Exemplo WHILE
let numero1 = 1;
let numero5 = 5;

while (numero1 <= numero5) {
    console.log(`Numero atual: ${numero1}`);
    numero1++; // let numero1 recebe +1.
}


let valor01 = 12;
let valor02 = 10;

while (valor01 <= valor02) {
    console.log(`Valor atual: ${valor01}`);
    valor01++;
}


console.log('=========================');

// Exemplo DO/WHILE

let valor03 = 12;
let valor04 = 10;

do {
    console.log(`Valor atual: ${valor03}`) // DO/WHILE garante pelo menos uma repetição.
} while (valor03 <= valor04);