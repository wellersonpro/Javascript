const func = [];

for (let i = 0; i < 10; i++) {
    func.push(function() {
        console.log(i);
    });
};

func[5](); // O let tem escopo de bloco, ele se lembra do valor de indíce 5.