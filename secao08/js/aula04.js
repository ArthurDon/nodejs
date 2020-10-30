// let itexto = document.getElementById('produto');

// console.log(itexto);

//let spans = document.getElementsByTagName('span')

// console.log(spans);

// let elements = document.getElementsByClassName('texto');
// console.log(elements);

// Ler valores
// console.log(spans[0].textContent);
// console.log(spans[1].innerHTML);

// Alterar valores
//spans[0].textContent = 'JavaScript';
// spans[1].textContent = 'Geek';

// let span = document.getElementsByTagName('span')[0];

// console.log(span.innerHTML);

// span.style.textTransform = 'uppercase';

// let inp = document.querySelector('input'); // busca pela tag, so busca o primeiro elemento

// let eles = document.querySelector('.texto'); // busca pela classe, ele devolveu o primeiro elemento só
//let eles = document.querySelectorAll('.texto'); // busca pela classe, todos os elementos

//let div1 = document.querySelector('#div1'); // busca elemento pelo id

// let imp = document.querySelector('input[name=preco]');

// console.log(imp);

// Exemplo 1

// let btn = document.querySelector('button.btn');

// btn.onclick = function(){
//     alert('Botao clicado...');
// }

// Exemplo 2

let btn = document.querySelector('button.btn');

let inp = document.querySelector('input[name=produto]');

btn.onclick = function(){
    alert(`Temos o texto ${inp.value}`);
}





