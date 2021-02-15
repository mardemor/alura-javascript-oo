import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    constructor(cliente, agencia) {
        super(0, cliente, agencia);
    }

    toString() {
        return `Conta Corrente de ${this.cliente.nome}, agencia ${this.agencia}, saldo R$${this.saldo}.`;
    }

    sacar(valor) {
        const tarifa = valor * 0.1;
        return super._sacar(valor, tarifa);
    }   
}