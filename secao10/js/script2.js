let btn = document.querySelector('#btn');
let div = document.querySelector('#app');

let promise = function(){
    return new Promise(function(resolve, reject){
        let github_user = document.querySelector('input[name=github_user]').value;

        //As tres etapas do ajax eh so isso
        let ajax = new XMLHttpRequest();
        ajax.open('GET', `https://api.github.com/users/${github_user}`);
        ajax.send(null);

        ajax.onreadystatechange = function(){
            if(ajax.readyState === 4){
                if(ajax.status === 200){
                    resolve(JSON.parse(ajax.responseText)); // convertendo a resposta para array

                }else{
                    reject('Nao foi encontrado nenhum usuario com este nome...')
                }
            }
        }
    })
}

btn.onclick = function(){
    // limpar a div
    div.innerHTML = '';

    // Criar elemento span
    let spanNome = document.createElement('span');

    // Criar a variavel nome
    let txtNome = '';

    // Executando a promise
    promise()
        // resolve (sucesso)
        .then(function(response){
            // Se o usuario tem nome
            if(response['name'] !== null){
                txtNome = document.createTextNode(response['name']);

                let img = document.createElement('img');
                img.setAttribute('src', response['avatar_url']);
                img.setAttribute('alt', response['name']);
                img.setAttribute('width', '45px');
                img.setAttribute('height', '45px');

                div.appendChild(img);
            }else{
                txtNome = document.createTextNode('O usuario encontrado nao possui nome...');
            }
            // adiciona o texto ao span e o span a div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        })
        .catch(function(error){
            txtNome = document.createTextNode(error);
            //Adiciona o texto ao span e o span á div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        });
}