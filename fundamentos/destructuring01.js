// Recurso introduzido no ES2015

const pessoa = {
    nome: 'Lara',
    idade: '25',
    endereco: {
        logradouro: 'Rua Pr',
        numero: 211
    }
}

const { nome, idade} = pessoa; // retirando nome e idade do objeto pessoa.
console.log(nome, idade);

const { nome: n, idade: i} = pessoa; // retirando nome e idade de pessoa e mudando o nome e idade para n e i.
console.log(n, i);

const { sobrenome, bemHumorada = true} = pessoa; // sobrenome retorna undefined por padrão mas em bemHumorada foi atribuido como padrão o true.
console.log(sobrenome, bemHumorada);

/*
const { endereco: { logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);*/