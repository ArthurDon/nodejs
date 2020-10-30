function mostrarAlerta(){
    alert('O botão foi clicado');
}


function mudarTexto(elemento){
    elemento.innerHTML = 'Eu estou avisando...';
}

function mudarCor(){
    let cores = ['green', 'red', 'magenta', 'purple', 'blue', 'yellow', 'black', 'orange'];

    const numero = Math.floor((Math.random() * cores.length) + 1); // pegando randomico e pegando um numero inteiro

    document.bgColor = cores[numero]; // cores[0], cores[1] .... 
    // document é toda a pagina
}


function escreverTexto(input){
    let span = document.getElementById('texto');

    span.innerHTML = input.value;
}