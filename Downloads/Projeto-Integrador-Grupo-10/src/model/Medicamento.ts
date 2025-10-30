export class Medicamento {
  informaçoes: string | undefined;
  constructor(
    private id: string,
    private nome: string,
    private dosagem: string,
    private bula: string,
    private informacoes: string
  ) {
    if (!nome) throw new Error("Nome obrigatório");
    if (!dosagem) throw new Error("Dosagem obrigatório");
    if (!bula) throw new Error("Bula obrigatório");
    if (!informacoes) throw new Error("Informações obrigatórias");
  }

  static create(
    nome: string,
    dosagem: string,
    bula: string,
    informacoes: string
  ) {
    const id = crypto.randomUUID();
    return new Medicamento(id, nome, dosagem, bula, informacoes);
  }

  getId(): string {
    return this.id;
  }

  getNome(): string {
    return this.nome;
  }

  getDosagem(): string {
    return this.dosagem;
  }

  getBula(): string {
    return this.bula;
  }

  getInformacoes(): string {
    return this.informacoes;
  }

  setNome(nome: string): void {
    if (!nome) throw new Error("Nome obrigatório");
    this.nome = nome;
  }

  setDosagem(dosagem: string): void {
    if (!dosagem) throw new Error("Dosagem obrigatório");
    this.dosagem = dosagem;
  }

  setBula(bula: string): void {
    if (!bula) throw new Error("Bula obrigatório");
    this.bula = bula;
  }

  setInformacoes(informacoes: string): void {
    if (!informacoes) throw new Error("Informações obrigatórias");
    this.informacoes = informacoes;
  }
}
