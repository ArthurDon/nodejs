// var numero = 42;
// //console.log(numero);


// numero = numero + 18;
// //console.log(numero);

// // Let
// let outro_numero = 42;
// //console.log(outro_numero);

// outro_numero = outro_numero + 18;
//console.log(outro_numero);

//let nome = 'Arthur';
//console.log(nome);

//nome = 'Pets';
//console.log(nome);

// for(let i = 0; i < 5; i++){
//     let valor = i * 3;
//     console.log(valor);

// }

//console.log(valor); //ReferenceError
//console.log(i);

// let numero = 80;
// console.log(numero);


//let numero = 32; //sintaxeError
//console.log(numero);

// const - Declarar constantes(se mantem constante, nao muda)

const TAXA = 1.44;
//console.log(TAXA);

let res = 45 * TAXA;
//console.log(res);

// TAXA = 5;
// console.log(TAXA); // typeError

// Constante vs Mutação
const curso = {nome: 'Programação em JavaScript'};

// console.log(curso);
//console.log(curso.nome);

// Não posso alterar o valor de uma constante
//curso = 43; //Erro!

//Podemos realizar mutação em dados contidos na constante
curso.nome = 'Programação em Python'; // MUTAÇÃO, estamos mudando o NOME e nao a constante
// console.log(curso);
// console.log(curso.nome);

/*
DICAS DE COMO DECLARAR VARIAVEIS EM JAVASCRIPT

- A variavel poderá ser alterada? (vai variar?) se sim, use Let
- A variavel será constante? (não vai variar) se sim, use const
*/


