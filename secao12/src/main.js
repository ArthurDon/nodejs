import api from './api';

class App{
    //Construtor
    constructor(){
        //Lista de repositorios
        this.repositorios = [];

        // Form
        this.formulario = document.querySelector('form');

        // Lista
        this.lista = document.querySelector('.list-group');

        // Metodo para registrar os eventos do form
        this.registrarEventos();
    }

    registrarEventos(){
        this.formulario.onsubmit = evento => this.adicionarRepositorio(evento);
        
    }

    async adicionarRepositorio(evento){

        // Evita que o formalurario recarregue a pagina
        evento.preventDefault();

        // Recuperar o valor do input
        let input = this.formulario.querySelector('input[id=repositorio]').value;

        // Se o input vier vazio.... sai da aplicação
        if(input.length === 0){
            return; // return sempre sai da função
        }

        // ativa o carregamento
        this.apresentarBuscando();

        try{
            let response = await api.get(`/repos/${input}`);

            //console.log(response);

            let {name, description, html_url, owner: {avatar_url}} = response.data;

            // Adiciona o repositorio na lista
            this.repositorios.push({
                nome: name,
                descricao: description,
                avatar_url,
                link: html_url,
            });

            // Renderizar a tela
            this.renderizarTela();
        }catch(erro){
             // Limpa buscando
            this.lista.removeChild(document.querySelector('.list-group-item-warning'));

            // Limpar erro existente
            let er = this.lista.querySelector('.list-group-item-danger');
            if(er !== null){
                this.lista.removeChild(er);
            }

            //<li>
            let li = document.createElement('li');
            li.setAttribute('class', 'list-group-item list-group-item-danger');
            let txtErro = document.createTextNode(`O repositorio ${input} nao existe...`);
            li.appendChild(txtErro);
            this.lista.appendChild(li);
        }    
    }

    apresentarBuscando(){
       
        //<li>
        let li = document.createElement('li');
        li.setAttribute('class', 'list-group-item list-group-item-warning');
        let txtBuscando = document.createTextNode(`Aguarde, buscando o repositorio....`);
        li.appendChild(txtBuscando);
        this.lista.appendChild(li);
    }

    renderizarTela(){
        //Limpar o conteudo de lista
        this.lista.innerHTML = '';

        // Percorrer toda a lista de repositorios e criar os elementos
        this.repositorios.forEach(repositorio =>{

            //<li>
            let li = document.createElement('li');
            li.setAttribute('class', 'list-group-item list-group-item-action');

            //<img>
            let img = document.createElement('img');
            img.setAttribute('src', repositorio.avatar_url);
            li.appendChild(img);

            //<strong>
            let strong = document.createElement('strong');
            let txtnome = document.createTextNode(repositorio.nome);
            strong.appendChild(txtnome);
            li.appendChild(strong);

            // Paragrafo
            let p = document.createElement('p');
            let txtDescricao = document.createTextNode(repositorio.descricao);
            p.appendChild(txtDescricao);
            li.appendChild(p);

            //Ancora
            let a = document.createElement('a');
            a.setAttribute('target', '_blank');
            a.setAttribute('href', repositorio.link);
            let txtA = document.createTextNode('Acessar');
            a.appendChild(txtA);
            li.appendChild(a);     
            
            // Adicionar <li> como filho da ul
            this.lista.appendChild(li);

            // Limpar o conteudo do input
            this.formulario.querySelector('input[id=repositorio]').value = '';

            // Adiciona o foco no input
            this.formulario.querySelector('input[id=repositorio]').focus();
        });

    }

}

// Construtor vai executar, por isso chamamos só
new App();