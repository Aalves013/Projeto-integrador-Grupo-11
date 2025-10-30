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
    complemento: String;
  }): Medicamento {
    const medicamentoCreated = Medicamento.create(
      medicamento.nome,
      medicamento.dosegem,
      medicamento.forma_administrativa,
      medicamento.dataFab,
      medicamento.dataVal,
      medicamento.lote,
      medicamento.no_estoque,
      medicamento.complemento,  
    );
    this.lista.push(medicamentoCreated);
    return medicamentoCreated;
  }

  getMedicamento(): Medicamento[] {
    return this.lista;
  }
}
