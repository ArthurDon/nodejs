// // Rest/Spread (Juntar/Espalhar)-> ...

// function total(...precos){
//     let total = 0;

//     precos.forEach(p => total += p);

//     return total
// }

// console.log(total(23.44, 22, 3.45, 5.67).toFixed(2));

// console.log(total(23, 67));

// console.log(total(3, 5));

// console.log(total());

// let frutas1 = ['Manga', 'uva', 'Banana'];
// let frutas2 = ['Abacate', 'Morango', 'Jaca'];

// let compras = [...frutas1, ...frutas2];

// console.log(compras);

let alunos = ['Paula', 'Felipe', 'Fernanda'];
let novo = 'Joana';

//alunos.push(novo);
let todos = [...alunos, novo]; 
//console.log(alunos);
console.log(todos);
