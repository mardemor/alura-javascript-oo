// Objetos passados como autenticavel devem ter o metodo autenticar(senha)

export class SistemaAutenticacao {

    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        // teste 1: existe um membro chamado 'autenticar' no objeto 'autenticavel' ?
        // teste 2: este membro é do tipo Function
        return 'autenticar' in autenticavel && autenticavel.autenticar instanceof Function;
    }
}