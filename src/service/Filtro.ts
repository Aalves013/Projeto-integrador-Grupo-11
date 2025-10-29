import { Filtro } from "../model/Solicitacao";

export class FiltroService {
  lista: Filtro[] = [];

  constructor(public armazenamento: Filtro[]) {
    this.lista = armazenamento;
  }

  createFiltro(Filtro: {
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

  getFiltro(): Filtro[] {
    return this.lista;
  }
}