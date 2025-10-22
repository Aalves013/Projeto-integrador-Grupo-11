import { Medicamento } from "../model/Medicamento";

export class MedicamentoService {
  lista: Medicamento[] = [];

  constructor(public armazenamento: Medicamento[]) {
    this.lista = armazenamento;
  }

  createMedicamento(medicamento: {
    id: String;
    nome: String;
    dosegem: Number;
    forma_administrativa: String;
    dataFab: Number;
    dataVal: Number;
    lote: Number;
    no_estoque: Number;
  }): Medicamento {
    const medicamentoCreated = new Medicamento(
      medicamento.id,
      medicamento.nome,
      medicamento.dosegem,
      medicamento.forma_administrativa,
      medicamento.dataFab,
      medicamento.dataVal,
      medicamento.lote,
      medicamento.no_estoque
    );
    this.lista.push(medicamentoCreated);
    return medicamentoCreated;
  }

  getMedicamento(): Medicamento[] {
    return this.lista;
  }
}
