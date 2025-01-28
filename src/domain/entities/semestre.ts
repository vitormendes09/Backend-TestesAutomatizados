import { Disciplina } from "./disciplina";

export class Semestre {
  private id: string;
  private numero: number;
  private disciplinas: Disciplina[];

  constructor(id: string, numero: number, disciplinas: Disciplina[] = []) {
    this.id = id;
    this.numero = numero;
    this.disciplinas = disciplinas;
  }

  
  public getId(): string {
    return this.id;
  }

  public getNumero(): number {
    return this.numero;
  }

  public setNumero(numero: number): void {
    this.numero = numero;
  }

  public getDisciplinas(): Disciplina[] {
    return this.disciplinas;
  }

  public addDisciplina(disciplina: Disciplina): void {
    this.disciplinas.push(disciplina);
  }
}
