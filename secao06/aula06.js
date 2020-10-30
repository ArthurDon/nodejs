// Forma 1

function somar1(num1, num2){
    return num1 + num2;
}

console.log(somar1(4, 6))

// Forma 2
const somar2 = function(num1, num2){
    return num1 + num2
}

console.log(somar2(3, 6))

// Arrow function
const somar4 = (num1, num2) => {
    return num1 + num2;
}

console.log(somar4(4, 7));

/*

ATENÇÃO:
    Caso a sua função tenha apenas 1 parametro de entrada e executa apenas uma linha,
    voce pode simplificar ainda mais usando arrow functions

*/

const dobrar = valor => valor * 2;

console.log(dobrar(2));

function mensagem1(){
    console.log("Evolua seu lado chups");
}

mensagem1();


const msg = () => console.log("Evolua seu lado Peta");

msg();
