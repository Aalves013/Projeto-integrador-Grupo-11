import { User } from "../model/User";

export class UserService {
    lista: User[] = [];

    constructor(public armazenamento: User[]) {
        this.lista = armazenamento;

    }

    createUser(User: {
        nome: String;
        email: String;
        senha: String;
        tipo_cadastro: String;
    }): User {
        const UserCreated = User.create(
            User.nome,
            User.email,
            User.senha,
            User.tipo_cadastro
        );
        this.lista.push(UserCreated);
        return UserCreated;
    }

    getUser(): User[] {
        return this.lista;
    }

    getUserByNome(nome: String,): User | undefined {
        return this.lista.find((User) => User.getIdade() === nome);
    }
}