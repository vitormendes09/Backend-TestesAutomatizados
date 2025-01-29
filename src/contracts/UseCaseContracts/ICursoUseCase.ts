import { IUseCase } from "../useCaseContracts/IUseCase";
import { ICurso } from "../../contracts/entityContracts/ICurso";

export interface ICreateCursoUseCase extends IUseCase<ICurso, ICurso> {}
export interface IGetCursoUseCase extends IUseCase<number, ICurso | undefined> {
  getAll(): any;
}
export interface IUpdateCursoUseCase extends IUseCase<{ id: number; data: Partial<ICurso> }, ICurso | undefined> {}
export interface IDeleteCursoUseCase extends IUseCase<number, boolean> {}
export interface IListCursosUseCase extends IUseCase<void, ICurso[]> {}