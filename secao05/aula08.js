let idade = 19;
const nome = 'Arthur';

function soma_3(idade){
    return idade + 3

}

console.log(nome + ' tem ' + idade + ' anos');


// Template Strings
console.log(`${nome} tem ${soma_3(idade)} anos`);

/*

Em template strings, usa-se a cráse e nao aspas simples ou acento agudo

Não é '
Não é á 
É `

*/