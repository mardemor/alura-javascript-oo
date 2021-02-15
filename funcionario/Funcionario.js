export class Funcionario {

    #nome;
    #cpf;
    #salario;
    #bonificacao;
    #senha;

    constructor(nome, cpf, salario, bonificacao) {
        this.#nome = nome;
        this.#cpf = cpf;
        this.#salario = salario;
        this.#bonificacao = bonificacao;
    }

    get nome() {
        return this.#nome;
    }    
    get cpf() {
        return this.#cpf;
    }    
    get salario() {
        return this.#salario;
    }    
    get bonificacao() {
        return this.#bonificacao;
    }

    cadastrarSenha(senha) {
        this.#senha = senha;
    }

    autenticar(senha) {
        return this.#senha == senha;
    }
}