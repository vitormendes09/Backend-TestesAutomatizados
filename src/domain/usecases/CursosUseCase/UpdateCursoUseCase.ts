import { IUpdateCursoUseCase } from "../../../contracts/useCaseContracts/ICursoUseCase";
import { ICurso } from "../../../contracts/entityContracts/ICurso";

export class UpdateCursosUseCase implements IUpdateCursoUseCase {

    private cursos: ICurso[];

    constructor(cursos: ICurso[]) {
        this.cursos = cursos;
    }

    async perform({ idCurso, data }: { idCurso: number; data: Partial<ICurso>; }): Promise<ICurso | undefined> {

        console.log(`Enste é o valor de idCurso no momento: ${idCurso}`);
        
        const cursoIndex = this.cursos.findIndex(curso => curso.idCurso === idCurso);

        console.log(`Enste é o valor de idCurso no momento: ${idCurso}`);

        console.log(`Enste é o valor de cursoIndex no momento: ${cursoIndex}`);

        if (cursoIndex === -1) {
            throw new Error("Curso não encontrado.");
        }

        const curso = this.cursos[cursoIndex];

        if (data.nome) curso.nome = data.nome;
        if (data.descricao) curso.descricao = data.descricao;
        if (data.coordenador) curso.coordenador = data.coordenador;
        if (data.duracao) curso.duracao = data.duracao;
        if (data.nivel) curso.nivel = data.nivel;

        return Promise.resolve(curso);
    }
}