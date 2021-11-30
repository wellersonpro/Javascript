// içamento do var
console.log('a =', a);
var a = 2;
console.log('a =', a);


function teste() {
    console.log('a =', a);
    var a = 2;
    console.log('a =', a);
}
teste();


// içamento do let
let b; // let precisa ser inicializada.
console.log('b =', b);
b = 5;
console.log('b =', b);