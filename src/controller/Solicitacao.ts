import { Solicitacao } from "../model/Solicitacao";
import { app } from "../service";
import { solicitacaoService } from "../service/solicitacao";

export function SolicitacaoController() {
    const list: Solicitacao[] = [];
    const service = new solicitacaoService(list);

    app.get("/solicitacoes", (req, res) => {
        const solicitacao = service.getSolicitacao();
        res.json(service);
    });

    app.post("/solicitacoes", (req, res) => {
        const solicitacaoData = req.body;
        const newSolicitacao = service.createSolicitacao(solicitacaoData);
        res.status(201).json(newSolicitacao);
    });
}