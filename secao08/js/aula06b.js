let btns = document.querySelectorAll('button');

for(let i = 0; i < btns.length; i++){
    btns[i].onclick = function(){
        document.querySelector('body').style.backgroundColor = btns[i].getAttribute('class').split('-')[1];     
        // ele pega a classe, tipo exemplo, a classe class="btn-green", da um split que separa os dois itens
        //btn, green e pega so a cor e seta ele.        
    };
}