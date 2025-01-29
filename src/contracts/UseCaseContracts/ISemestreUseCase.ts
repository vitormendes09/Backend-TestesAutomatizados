import { IUseCase } from "../../contracts/useCaseContracts/IUseCase";
import { ISemestre } from "../../contracts/entityContracts/ISemestre";

export interface ICreateSemestreUseCase extends IUseCase<ISemestre, ISemestre> {}
export interface IGetSemestreUseCase extends IUseCase<number, ISemestre | undefined> {}
export interface IUpdateSemestreUseCase extends IUseCase<{ id: number; data: Partial<ISemestre> }, ISemestre | undefined> {}
export interface IDeleteSemestreUseCase extends IUseCase<number, boolean> {}
export interface IListSemestresUseCase extends IUseCase<void, ISemestre[]> {}