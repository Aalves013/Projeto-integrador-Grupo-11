export class Barbeiro{
    constructor(
        private id: String,
        private nome: String,
        private diasTrabalho: String[],
        private horaInício: String,
        private horaFim: String
    ){
        if (!nome) throw new Error("nome obrigatório");
        if (!diasTrabalho || diasTrabalho.length === 0) throw new Error("diasTrabalho obrigatório");
        if (!horaInício) throw new Error("horaInício obrigatório");
        if (!horaFim) throw new Error("horaFim obrigatório");

        if (!nome.length < 3) throw new Error("nome muito curto")
    }

    static create(nome: String, diasTrabalho: String[], horaInício: String, horaFim: String){
      const id = crypto.randomUUID();
      return new Barbeiro(id, nome, diasTrabalho, horaInício, horaFim);
    }

    getID(): String{
        return this.id;
    }

    getNome(): String{
        return this.nome;
    }

    getDiasTrabalho(): String{
        return this.diasTrabalho;
    }

     getHoraInício(): String{
        return this.horaInício;
    }

     getHoraFim(): String{
        return this.horaFim;
    }
}
