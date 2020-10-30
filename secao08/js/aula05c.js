let btn = document.querySelectorAll('button');

for(let i = 0; i < btn.length; i++){
    btn[i].onclick = function(){
        document.querySelector('#app').removeChild(btn[i]);
    };
}