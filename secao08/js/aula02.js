let a = document.querySelector('.link'); // vai buscar a classe com o .

// console.log(a);
//console.log(a.innerText);

//console.log(a.parentNode); // o pai do nó (body)

// console.log(a.parentNode.parentNode); // o pai do pai do nó, o pai do a , o pai do body (html)
// console.log(a.parentNode.parentNode.parentNode); // Document
// console.log(a.parentNode.parentNode.parentElement.parentElement);// null, está no limite 

//console.log(a.parentNode.parentNode.childNodes); // html, mostra os seus filhos nós

//console.log(a.parentNode.parentNode.firstChild); // primeiro filho do html

//console.log(a.firstChild);

//console.log(a.parentNode.parentNode.lastChild); // ultimo filho do html

//console.log(a.parentNode.parentNode.firstChild.nextSibling); // é o proximo irmao, pegou o primeiro filho do html que é head e pega o proximo irmao
//console.log(a.parentNode.parentNode.firstChild.nextSibling.firstChild); // primeiro filho do body
//console.log(a.parentNode.parentNode.firstChild.nextSibling.firstChild.nextSibling); // o proximo filho de body
//console.log(a.parentNode.parentNode.firstChild.nextSibling.previousSibling); // irmao anterior que eh o head