/*Conjuntos (Set)

- Conjuntos nao aceitam repetição de valores
- Conjuntos nao sao indexados
*/

// Declarando um Set(conjunto)
let cursos = new Set();

// Adicionando valores
cursos.add('Programação para Leigos');
cursos.add('Algoritmos e logica de Programação');

// Adicionar valores concatenados

cursos.add('Programação em C').add('Programação em Java').add('Programação em Python');

cursos.add('Banco de Dados');
cursos.add('Programação Web com Django Framework');


//cursos.add('Banco de Dados'); Nao adiciona de novo se ja tem

//console.log(cursos);

// Acessando o tamanho do conjunto
//console.log(cursos.size);

//console.log(cursos.has('Banco de Dados'));

// Deletar elementos de um conjunto
// cursos.delete('Programação em Python');
// console.log(cursos);

let frutas = ['Manga', 'Uva', 'Pitaia', "Uva"];

let frutas_unicas = new Set(frutas);

console.log(frutas_unicas);





