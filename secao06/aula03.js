function calcular_idade1(ano_nascimento){
    const data = new Date(); //Gera a data atual

    const idade = data.getFullYear() - ano_nascimento;

    return idade;
}

function calcular_idade2(ano_nascimento){
    const data = new Date();

    const idade = data.getFullYear() - ano_nascimento;

    console.log(idade);
}

// let d = new Date();

// console.log(d.getFullYear());

// console.log(calcular_idade1(1996));

// let retorno = calcular_idade1(1995);
// console.log(retorno);

let ret = calcular_idade1(1996);
// console.log(ret + 3);

// calcular_idade2(1977);

const data = new Date();
// console.log(`Data completa: ${data}`);

// console.log(`Ano: ${data.getFullYear()}`);

// console.log(`Mes: ${data.getMonth() + 1}`); // 0 para Janeiro, 1 para Fevereiro ..... por isso coloquei + 1

// FIQUE ESPERTO

function somar(num1, num2){
    return num1 + num2;
}

console.log(somar(4, 6)); // 10

console.log(somar(4));// NaN - Not a Number

console.log(somar(4, 6, 8));// 10 - ele so fez dos dois elementos q ele espera

console.log(somar(4, 6, 8, 3, 2, 1, 19)); //10 - ele so fez dos dois elementos q ele espera

