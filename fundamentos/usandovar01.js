// Var tem escopo global e de função
{ 
    { 
        { 
            { 
                var sera = 'Será???'; 
            } 
        } 
    } 
}
console.log(sera);

function teste() {
    var local = 123;
    console.log(local); // Escopo de função, executável somente dentro da função.
}

teste()
console.log(local); // Erro!