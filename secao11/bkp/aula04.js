// let nome = 'Geek University';

// for(let letra of nome){
//     console.log(letra);
// }

//let numeros = [1, 2, 3, 4, 5];

// for(let numero of numeros){
//     console.log(numero * 2);
// }

// o for IN tem acesso ao indice e o of ao valor
// for(let indice in numeros){
//     console.log(`Indice: ${indice}, valor: ${numeros[indice]}`);
// }

let cursos = new Map([
    [1, 'Programação para leigos'],
    [2, 'Logica de programaçãp'],
    [3, 'Programação em C'],
    [4, 'Programação em Java'],
    [5, 'Banco de Dados'],
    [6, 'Programação Web com Django Framework'],
    [7, 'Programação em Python']
]);

// for(let curso of cursos){
//     console.log(`${curso[0]} - ${curso[1]}`); // o curso[0] é o primeiro item, que é o 1,2,3,4.. e o outro sao os valores
// }

// chave/valor
// for(let curso of cursos){
//     console.log(curso);
// }

// Somente a chave
// for(let chave of cursos.keys()){
//     console.log(chave);
// }

// Somente o valor
// for(let valor of cursos.values()){
//     console.log(valor);
// }

// chave e valor
// for(let [chave, valor] of cursos){
//     console.log(`chave: ${chave} - valor: ${valor}` );
// }
let conjunto = new Set([1, 2, 3, 4, 5, 5]);

for(let numero of conjunto){
    console.log(numero);
}