export class User {
    constructor(
        private id: String,
        private nome: String,
        private telefone: String,
        private email: String,
        private senha: String,
        private idade?: number
    ) {
        if (!nome) throw new Error("nome obrigatório");
        if (!telefone) throw new Error("telefone obrigatório");
        if (!email) throw new Error("email obrigatório");
        if (!senha) throw new Error("senha obrigatória");

        if (nome.length < 6) throw new Error("nome muito curto");
        if (senha.length < 6) throw new Error("senha muito curta");
    }   
    
    static create(id: String, nome: String, telefone: String, email: String, senha: String, idade?: number) {
        return new User(id, nome, telefone, email, senha, idade);
    }

    gitId(): String {
        return this.id;
    }

    gitNome(): String {
        return this.nome;
    }

    gitTelefone(): String {
        return this.telefone;
    }

    gitEmail(): String {
        return this.email;
    }

    gitSenha(): String {
        return this.senha;
    }

    gitIdade(): Number | undefined {
        return this.idade;
    }

    















}