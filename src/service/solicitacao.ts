import { Solicitacao } from "../model/Solicitacao";

export class solicitacaoService {
  lista: Solicitacao[] = [];

  constructor(public armazenamento: Solicitacao[]) {
    this.lista = armazenamento;
  }

  createSolicitacao(solicitacao: {
    medicamento_id: string;
    nome_medicamento: String;
    enfermeiro_responsavel: String;
    quantidade: Number;
    dataSolicitacao: Date;
  }): Solicitacao {
    const createsolicitacao = Solicitacao.create(
      solicitacao.medicamento_id,
      solicitacao.nome_medicamento,
      solicitacao.enfermeiro_responsavel,
      solicitacao.quantidade
    );

    return createsolicitacao;
  }
}
