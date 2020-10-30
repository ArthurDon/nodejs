let btn = document.querySelector('button');

btn.onclick = function(){
    // Declara a vsriavel de texto que sera adicionado no paragrafo
    let textElement = '';

    //Recupera o valor do input
    let inputValue = document.querySelector('input').value;

    // Cria um elemento paragrafo <p><p/>
    let pElement = document.createElement('p');// tipo de elemento, p = paragrafo

    // Adiciona o atributo class ao paragrafo
    pElement.setAttribute('class', 'classe-p'); // colocando classe na tag

    // Verifica se o usuario preencheu o input, caso contrario, coloca um texto padrao
    if(inputValue !== ""){
        textElement = document.createTextNode(inputValue);
    }else{
        textElement = document.createTextNode('Veio vazio....');
    }

    // Adiciona o texto como filho do paragrafo    
    pElement.appendChild(textElement);

    // Recupera a div
    let divElement = document.querySelector('#app'); // # = id  

    // Adiciona o paragrafo como filho da div
    divElement.appendChild(pElement);

    // Limpa o input
    document.querySelector('input').value = ''; // depois que digitar, o campo fica vazio

}