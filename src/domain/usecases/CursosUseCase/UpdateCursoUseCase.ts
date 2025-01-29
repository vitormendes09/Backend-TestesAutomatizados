import { IUpdateCursoUseCase } from "contracts/UseCaseContracts/ICursoUseCase";

import { ICurso } from "contracts/EntityContracts/ICurso";

export class UpdateCursosUseCase implements IUpdateCursoUseCase {

    private cursos: ICurso[];

    constructor(cursos:ICurso[]){
        this.cursos = cursos;

    }
    async perform({id, data}: { id: number; data: Partial<ICurso>; }): Promise<ICurso | undefined> {
        const cursoIndex = this.cursos.findIndex(curso => curso.idCurso == id);

        if(cursoIndex == -1){
            throw new Error("Curso não encontrado.");
        }

        const curso = this.cursos[cursoIndex];

        if(data.nome) curso.nome =data.nome ;
        if(data.descricao) curso.descricao = data.descricao;
        if(data.coordenador) curso.coordenador = data.coordenador;
        if(data.duracao) curso.duracao = data.duracao;
        if(data.nivel) curso.nivel = data.nivel;

        return Promise.resolve(curso)
    }

}