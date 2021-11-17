const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
const template = `
    Olá
    ${nome}!` //Templatestring.
console.log(concatenacao, template);

// expressões...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase(); //Função arrow que transforma texto em maiúsculo.
console.log(`Ei... ${up('cuidado')}!`);