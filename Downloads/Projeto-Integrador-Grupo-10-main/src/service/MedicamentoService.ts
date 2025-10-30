import { Medicamento } from "../model/Medicamento";

export class MedicamentoService {
  lista: Medicamento[] = [];

  createMedi(medicamento: {
    nome: string;
    dosagem: string;
    bula: string;
    informacoes: string;
  }): Medicamento {
    const medicamentoCreated = Medicamento.create(
      medicamento.nome,
      medicamento.dosagem,
      medicamento.bula,
      medicamento.informacoes
    );
    this.lista.push(medicamentoCreated);
    return medicamentoCreated;
  }

  getMedicamento(): Medicamento[] {
    return this.lista;
  }

  getMedicamentoByNome(nome: string): Medicamento[] | undefined {
    return this.lista.filter((medicamento) => medicamento.getNome() === nome);
  }

  getMedicamentoByDosagem(dosagem: string): Medicamento[] | undefined {
    return this.lista.filter(
      (medicamento) => medicamento.getDosagem() === dosagem
    );
  }
  getMedicamentoByBula(bula: string): Medicamento[] | undefined {
    return this.lista.filter((medicamento) => medicamento.getBula() === bula);
  }
  getMedicamentoByInformacoes(informacoes: string): Medicamento[] | undefined {
    return this.lista.filter(
      (medicamento) => medicamento.getInformacoes() === informacoes
    );
  }

  atualizarMedicamento(
    id: string,
    dados: {
      nome?: string;
      dosagem?: string;
      bula?: string;
      informacoes?: string;
    }
  ): Medicamento {
    const medicamento = this.lista.find((m) => m.getId() === id);
    if (!medicamento) {
      throw new Error("Medicamento não encontrado");
    }

    if (dados.nome !== undefined) {
      medicamento.setNome(dados.nome);
    }
    if (dados.dosagem !== undefined) {
      medicamento.setDosagem(dados.dosagem);
    }
    if (dados.bula !== undefined) {
      medicamento.setBula(dados.bula);
    }
    if (dados.informacoes !== undefined) {
      medicamento.setInformacoes(dados.informacoes);
    }

    return medicamento;
  }
}
