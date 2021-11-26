const func = [];

for (var i = 0; i < 10; i++) {
    func.push(function() {
        console.log(i);
    });
};

func[5](); // O var não tem escopo de bloco, o valor impresso será aquele que o fez sair do laço.