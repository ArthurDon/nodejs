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
        console.log(`Nome: ${this.nome} \nSobrenome: ${this.sobrenome}`)
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

    //Sobrescrita de método
    imprimir_dados(){
        super.imprimir_dados(); // atraves do super, tem o metodo q imprimo o nome e o sobrenome
        console.log(`Registro: ${this.registro} \nSalário: ${this._funcao._salario}`)
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

const prog = new Funcao('Programador', 5000.00);
const f1 = new Funcionario('Arthur', 'Donato', 'tucart15@gmail.com', '465.345.657-54', prog, 'F09482');
const c1 = new Cliente('Tuca', 'Anjos', 'td@gmail.com', '454.767.889-45', 4567.88);

f1.imprimir_dados(); // Pessoa

c1.imprimir_dados(); // Pessoa

/*
Sobrescrita de metodo - Overwriting

- Polimorfismo sao dois objetos do mesmo tipo tendo comportamentos diferentes
*/
