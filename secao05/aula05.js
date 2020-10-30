var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(numeros);
//console.log('------------------------');
function filtrar_pares(n){
    return n % 2 === 0;

}
// console.log(filtrar_pares(3)); // false
// console.log(filtrar_pares(8)); //true

function filtrar_impates(n){
    return n % 2 !== 0;
}

function filtrar_multiplos_5(n){
    return n % 5 === 0;

}

var ret = numeros.filter(filtrar_pares);
//console.log(ret);

ret = numeros.filter(filtrar_impates);
//console.log(ret);

ret = numeros.filter(filtrar_multiplos_5);
//console.log(ret);

var alunos = [

    {nome: 'Arthur', nota: 10},
    {nome: 'Beatriz', nota: 8.5},
    {nome: 'Fernanda', nota: 9.2},
    {nome: 'Pets', nota: 7.3}
]
console.log(alunos);


function filtrar_notas_maiores_que_8(aluno){
    return aluno.nota > 8;
}

var filtrados = alunos.filter(filtrar_notas_maiores_que_8);
console.log(filtrados);




