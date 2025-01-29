import { IUseCase } from "../../contracts/useCaseContracts/IUseCase"

import { IDisciplina } from "../../contracts/entityContracts/IDisciplina";

export interface ICreateDisciplinaUseCase extends IUseCase<IDisciplina, IDisciplina> {}
export interface IGetDisciplinaUseCase extends IUseCase<number, IDisciplina | undefined> {}
export interface IUpdateDisciplinaUseCase extends IUseCase<{ id: number; data: Partial<IDisciplina> }, IDisciplina | undefined> {}
export interface IDeleteDisciplinaUseCase extends IUseCase<number, boolean> {}
export interface IListDisciplinasUseCase extends IUseCase<void, IDisciplina[]> {}