import { ICurso } from "contracts/EntityContracts/ICurso";

export class Curso implements ICurso {
    idCurso: number;
    nome: string;
    descricao: string;
    duracao: number; // em anos
    nivel: string;  // Graduação, Pós-graduação, Mestrado, Doutorado
    coordenador: string;

    constructor(id: number, nome: string, descricao: string, duracao: number, nivel: string, coordenador: string) {
        this.idCurso = id;
        this.nome = nome;
        this.descricao = descricao;
        this.duracao = duracao;
        this.nivel = nivel;
        this.coordenador = coordenador;
    }



}