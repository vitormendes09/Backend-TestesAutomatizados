import {ISemestre} from "../../contracts/ISemestre";

export class Semestre implements ISemestre{
    idSemestre: number;
    numero: number;
    

    constructor(id: number, numero: number, ) {
        this.idSemestre = id;
        this.numero = numero;
    }

}
