import { Solicitacao } from "../model/Solicitacao";

export class solicitacaoService {
  lista: Solicitacao[] = [];

  constructor(public armazenamento: Solicitacao[]) {
    this.lista = armazenamento;
  }

  createSolicitacao(solicitacao: {
    nome_medicamento: String;
    enfermeiro_responsavel: String;
    quantidade: Number;
    dataSolicitacao: Date;
  }): Solicitacao {
    const solicitacaoCreated = Solicitacao.create(
      solicitacao.nome_medicamento,
      solicitacao.enfermeiro_responsavel,
      solicitacao.quantidade,
      solicitacao.dataSolicitacao
    );
    this.lista.push(solicitacaoCreated);
    return solicitacaoCreated;
  }

  getSolicitacao(): Solicitacao[] {
    return this.lista;
  }
}
