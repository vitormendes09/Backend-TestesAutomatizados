import { IGetCursoUseCase } from "contracts/UseCaseContracts/ICursoUseCase";
import { ICurso } from "contracts/EntityContracts/ICurso"

export class GetCursoUseCase implements IGetCursoUseCase{

    private cursos: ICurso[];
    
    constructor(cursos: ICurso[]){
        this.cursos = cursos
    }
    async perform(id: number): Promise<ICurso | undefined> {
       const curso = this.cursos.find(curso => curso.idCurso === id)

       return Promise.resolve(curso)
    }

}