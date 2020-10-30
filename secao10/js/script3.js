// Axios

let btn = document.querySelector('#btn');
let div = document.querySelector('#app');


btn.onclick = function(){
    // limpar a div
    div.innerHTML = '';

    // Criar o span
    let spanNome = document.createElement('span');

    // Variavel Nome
    let txtNome = '';

    // Recuperar o input 
    let github_user = document.querySelector('input[name=github_user]');
    let user = github_user.value;

    //Limpando o input
    github_user.value = '';
     

    //GET, POST, PUT, DELETE
    axios.get(`https://api.github.com/users/${user}`)
        .then(function(response){
            if(response.data.name !== null){
                // Esse response.data.name, é la da api, que tem name, avatar_url entre outros
                txtNome = document.createTextNode(response.data.name);

                let img = document.createElement('img');
                img.setAttribute('src', response.data.avatar_url);
                img.setAttribute('alt', response.data.name);
                img.setAttribute('width', '45px');
                img.setAttribute('height', '45px');

                div.appendChild(img);
            }else{
                txtNome = document.createTextNode('o usuario nao possui nome....');
            }
            // adiciona o conteudo na div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);

           

        })
        .catch(function(error){
            txtNome = document.createTextNode('Nao foi possivel realizar a requisição');
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);

        });
}