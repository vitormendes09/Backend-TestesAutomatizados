import { IDeleteCursoUseCase } from "contracts/UseCaseContracts/ICursoUseCase";
import {
     ICurso } from "contracts/EntityContracts/ICurso"
export class DeleteCursoUseCase implements IDeleteCursoUseCase {
  private cursos: ICurso[];

  constructor(cursos: ICurso[]) {
    this.cursos = cursos;
  }

  async perform(id: number): Promise<boolean> {
    const index = this.cursos.findIndex(curso => curso.idCurso === id);
    
    if (index === -1) {
      throw new Error("Curso não encontrado.");
    }

    this.cursos.splice(index, 1);
    
    return Promise.resolve(true);
  }
}
