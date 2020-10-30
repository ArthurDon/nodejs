// 1) Temos que referenciar o input

let input = document.querySelector('input[name=tarefa]'); // via name



// 2? Temos que referenciar o button

let btn = document.querySelector('#botao'); // id é com #



// 3) Temos que referenciar a lista

let lista = document.querySelector('#lista');

// Card
let card = document.querySelector('.card'); // classe é com .

let tarefas = JSON.parse(localStorage.getItem('tarefa')) || []; // pegando direto do banco, JSON.parse vai pegar o json la e transformar em array
// ou coloca como array vazio se nao encontrar


function renderizarTarefas(){

    // Limpar a listagem de itens antes de renderizar novamente a tela
    lista.innerHTML = '';
    for(tarefa of tarefas){
        // Criar o item da lista
        let itemLista = document.createElement('li');

        //Adicionar classes no item da lista (li)
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        // Adicionar evento de clique no item da lista
        itemLista.onclick = function(){
            deletarTarefa(itemLista);
        }

        //Criar um texto
        let itemTexto = document.createTextNode(tarefa);
        
        // Adicionar o texto no item da lista
        itemLista.appendChild(itemTexto);

        //Adicionar o item da lista na lista
        lista.appendChild(itemLista);
    }
}

// Executando a função para renderizar as tarefas
renderizarTarefas();

// 1) Precisamos 'escutar' o evento de clique no botao
btn.onclick = function(){
// 2) Precisamos capturar o valor digitado pelo usuario no input
    let novaTarefa = input.value;

    if(novaTarefa !== ""){
        // 3) Precisamos atualizar a nova tarefa na lista (array) de tarefas e renderizar a tela
        tarefas.push(novaTarefa);

        // Executando a função para renderizar as tarefas
        renderizarTarefas();

        // limpar o input
        input.value = '';

        // Limpar mensagens de erro ( spans )
        removerSpans();

        //Salva os novos dados no banco de dados
        salvarDadosNoStorage();
    }else{       
        removerSpans(); 
         

        let span = document.createElement('span');

        span.setAttribute('class', 'alert alert-warning');

        let msg = document.createTextNode('Voce precisa informar a tarefa....');

        span.appendChild(msg);

        card.appendChild(span);
        
       
    }


}

function removerSpans(){
    let spans = document.querySelectorAll('span');   
   

    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}

function deletarTarefa(tar){
    console.log(tar);
    // Remove a tarefa do array
    tarefas.splice(tarefas.indexOf(tar.textContent), 1); // o textContent pega o TEXTO EM SI, o indexOf vai pegar a posição, o indice e o 1 é 'deleta um pra mim'

    // Renderiza novamente a tela
    renderizarTarefas();

    //Salva os novos dados no banco de dados
    salvarDadosNoStorage();
}

function salvarDadosNoStorage(){
    // Todo navegador web possui esta capacidade
    localStorage.setItem('tarefa', JSON.stringify(tarefas));
}

