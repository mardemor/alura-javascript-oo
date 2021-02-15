export class Cliente {

    #nome;
    #cpf;
    #senha;    

    constructor(nome, cpf) {
        this.#nome = nome;
        this.#cpf = cpf;
    }

    get nome() {
        return this.#nome;
    }    
    get cpf() {
        return this.#cpf;
    }

    cadastrarSenha(senha) {
        this.#senha = senha;
    }

    autenticar(senha) {
        return this.#senha == senha;
    }
}