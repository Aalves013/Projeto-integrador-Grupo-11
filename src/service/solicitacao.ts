import { Solicitacao } from "../model/Solicitacao";

export class SolicitacaoService {
    lista: Solicitacao [] = [];

    constructor(public armazenamento: Solicitacao[]) {
        this.lista = armazenamento;
    }

    createSolicitacao( Solicitacao: {
        nome_medicamento: String;
        enfermeiro_responsavel: String;
        quantidade: Number;
        dataSolicitacao: Date;
    }): Solicitacao {
        const uuid = crypto.randomUUID();
        const createSolicitacao = new Solicitacao(
            uuid,
            Solicitacao.nome_medicamento,
            Solicitacao.enfermeiro_responsavel,
            Solicitacao.quantidade,
            Solicitacao.dataSolicitacao,
        );
    }
}