export class Curso {
  private id: string;
  private nome: string;
  private descricao: string;
  private duracao: number; // em anos
  private nivel: string;  // Graduação, Pós-graduação, Mestrado, Doutorado
  private coordenador: string;

  constructor(id: string, nome: string, descricao: string, duracao: number, nivel: string, coordenador: string) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.duracao = duracao;
    this.nivel = nivel;
    this.coordenador = coordenador;
  }

  public getId(): string {
    return this.id;
  }

   getNome(): string {
    return this.nome;
   }

   public setNome(nome: string): void {
    this.nome = nome;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public getDuracao(): number {
        return this.duracao;
    }

    public setDuracao(duracao: number): void {
        this.duracao = duracao;
    }

    public getNivel(): string {
        return this.nivel;
    }

    public setNivel(nivel: string): void {
        this.nivel = nivel;
    }

    public getCoordenador(): string | undefined {
        return this.coordenador;
    }

    public setCoordenador(coordenador: string): void {
        this.coordenador = coordenador;
    }

}