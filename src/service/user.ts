import { User } from "../model/User";

export class userService {
  lista: User[] = [];

  constructor(public armazenamento: User[]) {
    this.lista = armazenamento;
  }

  createUser(user: {
    id: String;
    nome: String;
    email: String;
    senha: String;
    tipo_cadastro: String;
  }): User {
    const userCreated = User.create(
      user.id,
      user.nome,
      user.email,
      user.senha,
      user.tipo_cadastro
    );
    this.lista.push(userCreated);
    return userCreated;
  }

  getUser(): User[] {
    return this.lista;
  }

  getUserByNome(nome: String): User | undefined {
    return this.lista.find((user) => user.getNome() === nome);
  }
}
