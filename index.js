import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./conta/ContaCorrente.js";
import { ContaPoupanca } from "./conta/ContaPoupanca.js";
import { Gerente } from "./funcionario/Gerente.js";
import { Diretor } from "./funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


function CriarEAutenticarDiretor() {
    const diretor = new Diretor('Rodrigo', 33344455566, 10000.0);
    diretor.cadastrarSenha('123');
    const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123');
    console.log(diretorEstaLogado);
}

function CriarEAutenticarGerente() {
    const gerente = new Gerente('Juliana', 44455566677, 7000.0);
    gerente.cadastrarSenha('123');
    const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123');
    console.log(gerenteEstaLogado);
}

function CriarEAutenticarCliente() {
    const clienteRicardo = new Cliente("Ricardo", 11122233344);
    clienteRicardo.cadastrarSenha('123');
    const clienteRicardoEstaLogado = SistemaAutenticacao.login(clienteRicardo, '123');
    console.log(clienteRicardoEstaLogado);
}

function CriarContasRicardo() {
    const contaCorrenteRicardo = new ContaCorrente(clienteRicardo, 1001);
    const contaPoupancaRicardo = new ContaPoupanca(clienteRicardo, 1001);
    contaCorrenteRicardo.depositar(500);
    contaPoupancaRicardo.depositar(500);
    contaCorrenteRicardo.sacar(100);
    contaPoupancaRicardo.sacar(100);
    console.log(contaCorrenteRicardo.toString());
    console.log(contaPoupancaRicardo.toString());
    console.log(`Quantidade de contas ${ContaCorrente.quantidadeDeContas}`);
}

function CriarClienteEContaAlice() {
    const clienteAlice = new Cliente("Alice", 22233344455);
    const contaAlice = new ContaCorrente(clienteAlice, 1002);
    console.log(contaAlice.toString());
}

console.log('Bem vindo ao Byte Bank');