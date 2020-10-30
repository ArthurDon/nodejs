/*
Função Fábrica - Function Factory

*/

function fabricar_curso(n, p){
    const desconto = 0.90;
    return {
        nome: n,
        preco: (p * desconto).toFixed(2)
    }
}

console.log(fabricar_curso('Programação Python', 30.00));
console.log(fabricar_curso('Criação de Api', 50.23));

