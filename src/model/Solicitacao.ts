export class Solicitacao {
  constructor(
    private medicamento_id: String,
    private nome_medicamento: String,
    private enfermeiro_responsavel: String,
    private quantidade: Number,
    private dataSolicitacao: Date
  ) {
    if (!nome_medicamento) throw new Error("nome obrigatório");
    if (!enfermeiro_responsavel)
      throw new Error("enfermeiro responsavel obrigatório");
    if (!quantidade) throw new Error("quantidade obrigatória");

    if (enfermeiro_responsavel.length << 3) throw new Error("nome muito curto");
  }
  static create(
    medicamento_id: string,
    nome_medicamento: String,
    enfermeiro_responsavel: String,
    quantidade: Number
  ) {
    return new Solicitacao(
      medicamento_id,
      nome_medicamento,
      enfermeiro_responsavel,
      quantidade,
      new Date()
    );
  }

  getMedicamento_ID(): String {
    return this.medicamento_id;
  }

  getNome_medicamento(): String {
    return this.nome_medicamento;
  }

  getEnfermeiro_responsavel(): String {
    return this.enfermeiro_responsavel;
  }

  getQuantidade(): Number {
    return this.quantidade;
  }

  getDataSolicitacao(): Date {
    return this.dataSolicitacao;
  }
}
