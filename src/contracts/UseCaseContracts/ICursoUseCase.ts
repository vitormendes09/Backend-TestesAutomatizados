import { IUseCase } from "./IUseCase";
import { ICurso } from "contracts/EntityContracts/ICurso";

export interface ICreateCursoUseCase extends IUseCase<ICurso, ICurso> {}
export interface IGetCursoUseCase extends IUseCase<number, ICurso | undefined> {}
export interface IUpdateCursoUseCase extends IUseCase<{ id: number; data: Partial<ICurso> }, ICurso | undefined> {}
export interface IDeleteCursoUseCase extends IUseCase<number, boolean> {}
export interface IListCursosUseCase extends IUseCase<void, ICurso[]> {}