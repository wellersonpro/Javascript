// Tratamento de erro.

function tratamentoDeErro(erro) { // Trata o erro capturado pelo catch.
    //throw new Error('Ocorreu um erro ao executar o código!');
    //throw 'Texto.'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!'); // Ocorrendo um erro aqui, ele vai para o catch.
    } catch (error) {
        tratamentoDeErro(error)
    } finally {
        console.log('final');
    }
}

const pessoa = { nome: 'Wellerson' };
imprimirNome(pessoa);