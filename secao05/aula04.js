var valores = [2, 4, 6, 8 , 10];
console.log(valores);

var dobro = valores.map(function(valor){
        return valor * 2;

});

//console.log(dobro);
//console.log('------------------------------------------------------------------')

function dobrar(valor){
        return valor * 2;

}

dobro = valores.map(dobrar);

//console.log(dobro);

// Encadeando maps para realizar multiplas transformações

function somar_4(valor){
    return valor + 4;

}

function dividir_5(valor){
    return valor / 5;
}

var resultado = valores.map(dobrar).map(somar_4).map(dividir_5);
console.log(resultado);

/*
Passo 1 -> dobrar = [4, 8, 12, 16, 20];
Passo 2 -> somar_4 = [8, 12, 16, 20, 24];
Passo 3 -> dividir_5 = [1.6, 2.4, 3.2, 4, 4.8];
*/



