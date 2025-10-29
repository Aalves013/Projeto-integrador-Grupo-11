import { Medicamento } from "../model/Medicamento";

export class MedicamentoService {
  lista: Medicamento[] = [];

  constructor(public armazenamento: Medicamento[]) {
    this.lista = armazenamento;
  }

  createMedicamento(medicamento: {
    nome: String;
    dosegem: Number;
    forma_administrativa: String;
    dataFab: Number;
    dataVal: Number;
    lote: Number;
    no_estoque: Number;
  }): Medicamento {
    const medicamentoCreated = new Medicamento(
      Medicamento.nome;
      Medicamento.dosegem;
      Medicamento.forma_administrativa;
      Medicamento.dataFab;
      Medicamento.dataVal;
      Medicamento.lote;
      Medicamento.no_estoque;
      Medicamento.complemento;
    );
    this.lista.push(medicamentoCreated);
    return medicamentoCreated;
  }

  getMedicamento(): Medicamento[] {
    return this.lista;
  }
}
