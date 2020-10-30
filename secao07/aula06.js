class Pessoa {
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(){
        return this._nome
    }

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        return this._sobrenome = sobrenome;
    }

    falar(msg){
        console.log(`${this.nome} está falando ${msg}`);
    }

    comer(){
        console.log(`${this.nome} está comendo...`);
    }

    beber(){
        console.log(`${this.nome} ${this.sobrenome} está bebendo...`);
    }

}


class Carro {
    constructor(modelo){
        this._marca = 'Honda';
        this._modelo = modelo;
    }

    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        return this._modelo = modelo;
    }      

    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }
  
}

// Instanciação de objetos - Forma 1

// const curso = new Object();
// curso.nome = 'Programação em JavaScript';
// curso.preco = 27.99;

// console.log(curso);

// curso['qtd_alunos'] = 999;
// console.log(curso);

// delete curso['qtd_alunos'];
// delete curso['preco'];
// console.log(curso);

// Instanciação de objetos - Forma 2 - Objeto Literal
const programa = {
    nome: 'Photoshop',
    preco: 9998.99,
    fabricante: {
        nome: 'Adobe',
        contato: 'contato@adobe.com',
        endereco: {
            rua: 'Da paz, 45',
            bairro: 'Nova lima',
            cidade: 'Sao Paulo'
        },
        filiais: [
            {cidade: 'Rio de Janeiro'},
            {cidade: 'Recife'}
        ]
    }
}

//console.log(programa);

//console.log(programa.nome); //photoshop
// console.log(programa.fabricante.nome.length); //adobe
// console.log(programa.fabricante.filiais); //2

//console.log(programa['fabricante']['filiais']); prof nao acha legal

// programa.nome = 'PlayStation OS';

// console.log(programa.nome);

// console.log(programa);

// delete programa.fabricante.filiais;

// console.log(programa.fabricante.filiais); // undefined ( nao existe)

//console.log(programa.fabricante.filiais.length); //TypeError



// Instanciação de objetos - Forma 3 - Objeto Literal

// const pessoa = {};

// //console.log(typeof(pessoa));

// pessoa.nome = 'Angelina';
// console.log(pessoa);


// Instanciação de objetos - Forma 4 - Função construtora

// function Lampada(cor){
//     this.cor = cor;
// }

// const li = new Lampada('Branca');

// console.log(li);

// console.log(typeof(li));


// Instanciação de objetos - Forma 5 - Objeto a partir das nossas classes

// const p1 = new Pessoa('Arthur', 'Donato');
// console.log(p1);
// console.log(typeof(p1));
// console.log(p1.nome); // FUNÇÃO GET
// console.log(p1.sobrenome); // FUNÇÃO GET

// p1.nome = 'Peta'; // set
// console.log(p1);

// p1.falar('xuuuuuuupssss');
// p1.comer();
// p1.beber();

const fit = new Carro('Fit');
//fit.imprimir();
console.log(fit.marca);
console.log(fit.modelo);
fit.modelo = 'Fit 2016';
console.log(fit.modelo);



