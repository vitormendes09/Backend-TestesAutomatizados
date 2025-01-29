import { IDisciplina } from "contracts/entityContracts/IDisciplina";

export class Disciplina implements IDisciplina {
    idDisciplina: number;
    nome: string;
    codigo: string;
    cargaHoraria: number;
    tipo: string;   // Obrigatória, Optativa, Eletiva
    idSemestre: number;

    constructor(
        id: number,
        nome: string,
        codigo: string,
        cargaHoraria: number,
        tipo: string,
        idSemestre: number


    ) {
        this.idDisciplina = id;
        this.nome = nome;
        this.codigo = codigo;
        this.cargaHoraria = cargaHoraria;
        this.tipo = tipo;
        this.idSemestre = idSemestre;

    }




}
