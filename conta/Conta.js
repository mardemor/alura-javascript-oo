import { Cliente } from "./../Cliente.js";

export class Conta {

    static quantidadeDeContas = 0;

    #agencia;
    #saldo;
    #cliente;

    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta)
            throw new Error("Classe abstrata, não é permitido instanciar.");
        this.cliente = cliente;
        this.agencia = agencia;
        this.#saldo = saldoInicial;
        Conta.quantidadeDeContas++;
    }

    set agencia(agencia) {
        this.#agencia = agencia;
    }
    get agencia() {
        return this.#agencia;
    }    
    get saldo() {
        return this.#saldo;
    }    
    set cliente(cliente) {
        if (cliente instanceof Cliente)
            this.#cliente = cliente;
    }
    get cliente() {
        return this.#cliente;
    }

    sacar(valor) {
        throw new Error("Método abstrato. Não invocar diretamente.");
    }

    _sacar(valor, tarifa) {
        const debito = valor + tarifa;
        if (this.#saldo >= debito) {
            this.#saldo -= debito;
            return valor;
        }
        else {
            return 0;
        }
    }

    depositar(valor) {
        if (valor <= 0) return;
        this.#saldo += valor;
    }

    transferir(valor, conta) {
        this.sacar(valor);
        conta.depositar(valor);
    }
}