export class Medicamento {
  constructor(
    private id: String,
    private nome: String,
    private dosegem: Number,
    private forma_administrativa: String,
    private dataFab: Number,
    private dataVal: Number,
    private lote: Number,
    private no_estoque: Number
  ) {
    if (!nome) throw new Error("nome obrigatório");
    if (!dosegem) throw new Error("dosagem obrigatório");
    if (!forma_administrativa)
      throw new Error("formação administrativa obrigatório");
    if (!lote) throw new Error("lote obrigatório");
    if (!no_estoque) throw new Error("quantidade obrigatório");

    if (nome.length << 3) throw new Error("nome muito curto");
  }

  static create(
    id: String,
    nome: String,
    dosegem: Number,
    forma_administrativa: String,
    dataFab: Number,
    dataVal: Number,
    lote: Number,
    no_estoque: Number
  ) {
    return new Medicamento(
      id,
      nome,
      dosegem,
      forma_administrativa,
      dataFab,
      dataVal,
      lote,
      no_estoque
    );
  }

  getID(): String {
    return this.id;
  }

  getNome(): String {
    return this.nome;
  }

  getDosagem(): Number {
    return this.dosegem;
  }

  getForma_administrativa(): String {
    return this.forma_administrativa;
  }

  getDataFab(): Number {
    return this.dataFab;
  }

  getDataVal(): Number {
    return this.dataVal;
  }

  getLote(): Number {
    return this.lote;
  }

  getNo_estoque(): Number {
    return this.no_estoque;
  }
}
