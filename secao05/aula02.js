/*
array contendo 5 elementos -> n = 5

// indices -> posição do elemento no array
[0], [1], [2], [3], [4]

// valores em um array
[12] ['Geek'] [true] [48] [52]


// Detalhes sobre arrays
- Possuem tamanho infinito*
- Podemos colocar qualquer tipo de dado
*/

// Forma 1
var alunos = new Array('Arthur', "Beatriz", "Peta", "Douglas", "Marcelo");
// var alunos = ['Arthur', "Beatriz", "Peta", "Douglas", "Marcelo"]
//console.log(alunos);

// Forma 2 [Recomendada]
var notas = [1, 3, 5, 7, 9];
//console.log(notas);

// Criando um array vazio
var dados = [];
//console.log(dados);

// Fazendo acesso ao valor de um indice
//console.log(notas[2]);

// Alterando o valor a partir do indice
notas[2] = 12;
//console.log(notas);

// Atenção ao acessar um valor com um indice que nao existe
notas[9] = 10; // nao existe
//console.log(notas);

if (notas[5] == undefined){

    notas[5] = 54;

}

// console.log(notas[5]);// 54
// console.log(notas[6]);// undefined
// console.log(notas[7]);// undefined
// console.log(notas[8]); // undefined
// console.log(notas[9]); //10

// console.log(notas[5] == undefined); //false

// Inserindo elementos no final do array
var nomes = ['Tuca', 'Mel', 'Marcelo'];
//console.log(nomes);

nomes.push('Beatriz'); //insere o valor no final do array
//console.log(nomes);

// Tamanho do array
//console.log(nomes.length); // 4 elementos
var tam = nomes.length;

//console.log(tam); // 4

// Ordenar os dados de um array
var alunos = ['Michelle', 'Vanilsa', 'Pedro', 'Fernanda', 'Mario', 'Luigi'];
//console.log(alunos);

alunos.sort(); //Ordenando array de strings
//console.log(alunos);

var precos = [123.55, 42.32, 546.99, 23.12];
console.log(precos);

//precos.sort(); // ATENÇÃO Ordenação de floats não funciona assim
//console.log(precos);

precos.sort(function(a, b) {return a - b;});
console.log(precos);

var idades = [5, 1, 12, 44, 78, 8];
//console.log(idades);

//idades.sort(); // ATENÇÃO Ordenação de int não funciona assim
//console.log(idades);
idades.sort(function(a, b) {return a - b;});
//console.log(idades);

// Deletar dados de um array
delete idades[3];
//console.log(idades);

idades[3] = 12;
console.log(idades);

//idades.splice(3, 1); // a partir do indice 3, delete um elemento
//console.log(idades); // tirando o empty

//idades.splice(3, 0, 56, 89); // A partir do indice 3, nao delete nenhum mas adicione 56, 89
//console.log(idades);

//idades.splice(3, 1, 23); // a partir do indice 3, deleta um e adiciona 23
//console.log(idades);

// Iterar no array
for(var i = 0; i < idades.length; i++){

    //console.log(idades[i]);

}

//Removendo elementos da ultima posição do array
//idades.pop();
//console.log(idades);

//var ret = idades.pop(); // remove e retorna o ultimo elemento de um array
//console.log(ret);
//console.log(idades);

//Removendo o primeiro elemento de um array
// idades.shift(); // remove e retorna o primeiro elemento de um array
// console.log(idades);

// var ret = idades.shift();
// console.log(ret);
// console.log(idades);


// Inserindo elementos no inicio de um array
//idades.unshift(99); // adicionando o 99 no inicio do array
//console.log(idades);

// RETORNA UM NOVO ARRAY A PARTIR DO INDICE INFORMADO
// var novo = idades.slice(3); // pegou do indice 3 pra frente
// console.log(novo);

//var novo = idades.slice(1, 2); // a partir no indice 1, pegue até o indice 2 sem incluí-lo
//console.log(novo);

var pares = [2, 4, 6, 8 , 10];
var impares = [1, 3, 5, 7, 9];

var rest = pares.concat(impares); //concatena os dois arrays
//console.log(rest);

rest = impares.concat(pares);
//console.log(rest);

rest.sort(function(a,b) {return a - b ;});
//console.log(rest);

// 4 X 4
var tabuleiro = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
console.log(tabuleiro[0][0]); // Linha 0 Coluna 0 -> 1
console.log(tabuleiro[2][2]); // Linha 2 coluna 2 -> 11



