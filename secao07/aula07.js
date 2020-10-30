const curso = {
    nome: 'Programação em JS',
    horas: 32,
    preco: 21.99
}

console.log(curso);

// console.log(typeof(curso));

// console.log(Object.keys(curso)); // as chaves

// console.log(Object.values(curso)); // os valores

//console.log(Object.entries(curso));

// Object.entries(curso).forEach(par => {
//     console.log(`${par[0]}: ${par[1]}`);
// })

// curso.nome = 'Criação de Api Rest com Django Rest Framework';

// console.log(curso);

// Object.defineProperty(curso, 'publicação', {
//     enumerable: true, // uma chave valor normal
//     writable: false, // pode alterar ele, pode reescrever? false, nao 
//     value: '07/12/2019' // valor do coiso
// });


// console.log(curso);


// const outro = {}

// Object.defineProperty(outro, '',{

// });

Object.freeze(curso); // congelar o curso, nao da pra alterar

curso.nome = 'Xuxa';
console.log(curso);
