import { IGetCursoUseCase } from "../../../contracts/useCaseContracts/ICursoUseCase";
import { ICurso } from "../../../contracts/entityContracts/ICurso";

export class GetCursoUseCase implements IGetCursoUseCase {

    private cursos: ICurso[];

    constructor(cursos: ICurso[]) {
        this.cursos = cursos;
    }

    async perform(id: number): Promise<ICurso | undefined> {
        const curso = this.cursos.find(curso => curso.idCurso === id);
        return Promise.resolve(curso);
    }

    async getAll(): Promise<ICurso[]> {
        return Promise.resolve(this.cursos);
    }
}