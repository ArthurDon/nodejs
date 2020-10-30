/*
funcionarios   
    nome,
    sobrenome,
    email,
    cpf,
    função,
    registro
clientes
    nome,
    sobrenome,
    email,
    cpf,
    renda
funções
    descrição,
    salario
*/

class Funcao{
    constructor(descricao, salario){
        this._descricao = descricao;
        this._salario = salario;
    }

    get descricao(){
        return this.descricao;
    }
    set descricao(descricao){
        return this.descricao = descricao;
    }
    get salario(){
        return this.descricao;
    }
    
    set salario(salario){
        return this._salario = salario;
    }
}

class Pessoa{
    constructor(nome, sobrenome, email, cpf){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
    }

    get nome(){
        return this._nome;
    }
    set nome(nome){
        return this._nome = nome;
    }
    get sobrenome(){
        return this._sobrenome;
    }
    set sobrenome(sobrenome){
        return this._sobrenome = sobrenome;
    }
    get email(){
        return this._email;
    }
    set email(email){
        return this._email = email;
    }
    get cpf(){
        return this._cpf;
    }
    set cpf(cpf){
        return this._cpf = cpf;
    }

    // MÉTODOS EXTRAS
    get nome_completo(){
        return this._nome + ' ' +  this._sobrenome;
    }

    set nome_completo(nome_completo){
        nome_completo = nome_completo.split(' '); // vai virar um array, separando por espaço, no caso [Marcelo, Donato], separar por espaço

        //Remove e retorna o elemento da posição 0 do array
        this._nome = nome_completo.shift(); // Recebeu a primeira parte, que é o Marcelo

        //Junta os elementos do array em uma string separando cada elemento por espaço
        this._sobrenome = nome_completo.join(' '); // ele pega o restante do array e junta para o sobrenome, monta uma str a partir do array
    }

    imprimir_dados(){
        console.log(`${this.nome} ${this.sobrenome}`)
    }
}

class Funcionario extends Pessoa{
    constructor(nome, sobrenome, email, cpf, funcao, registro){
        super(nome, sobrenome, email, cpf);
        this._funcao = funcao;
        this._registro = registro;
    }
    get funcao(){
        return this._funcao;
    }
    set funcao(funcao){
        return this._funcao = funcao;
    }

    get registro(){
        return this._registro;
    }
    set registro(registro){
        return this._registro;
    }
}

class Cliente extends Pessoa{
    constructor(nome, sobrenome, email, cpf, renda){
        super(nome, sobrenome, email, cpf);
        this._renda = renda;
    }
    get renda(){
        return this._renda;
    }
    set renda(renda){
        return this._renda = renda;
    }
}


// const c1 = new Cliente('Arthur', "Donato", 'arthur@gmail.com', '543.245.346-56', 2800.00);
// const c2 = new Cliente('Pets', 'Chups', 'chups@gmail.com', '454.356.543-45', 4009.00);

// console.log(c1);
// console.log(c2);

// console.log(c1.nome_completo);
// console.log(c2.nome_completo);

// c1.nome_completo = 'Marcelo Donato';
// console.log(c1);

// c2.imprimir_dados();

const programador = new Funcao('Programador', 4899.54);
const suporte = new Funcao('Suporte', 2799.34);

// console.log(programador);
// console.log(suporte);

const f1 = new Funcionario('Gabriel', 'Gomes', 'ggs@gmail.com', '450.657.546-23', programador, 'F900');
const f2 = new Funcionario('Beatriz', 'Maia', 'bia@gmail.com', '059.676.678-98', suporte, 'F0594');

console.log(f1);
console.log(f2);

console.log(f1._funcao._salario)

f1.imprimir_dados();
