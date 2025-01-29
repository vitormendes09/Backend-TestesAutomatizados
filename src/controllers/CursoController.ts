import { Request, Response } from "express";
import { ICursoController } from "contracts/ControllerContracts/ICursoController";
import { IUseCase } from "contracts/UseCaseContracts/IUseCase";
import { ICurso } from "contracts/EntityContracts/ICurso";
import { ICreateCursoUseCase, IDeleteCursoUseCase, IGetCursoUseCase, IUpdateCursoUseCase } from "contracts/UseCaseContracts/ICursoUseCase";

export class CursoController implements ICursoController{

  private createCursoUseCase: ICreateCursoUseCase;
  private updateCursoUseCase: IUpdateCursoUseCase;
  private deleteCursoUseCase: IDeleteCursoUseCase;
  private getCursoUseCase: IGetCursoUseCase;
  private useCase: IUseCase<any, any>;

  constructor(
    
    createCursoUseCase: ICreateCursoUseCase,
    updateCursoUseCase: IUpdateCursoUseCase,
    deleteCursoUseCase: IDeleteCursoUseCase,
    getCursoUseCase: IGetCursoUseCase
  ) {
    this.createCursoUseCase = createCursoUseCase;
    this.updateCursoUseCase = updateCursoUseCase;
    this.deleteCursoUseCase = deleteCursoUseCase;
    this.getCursoUseCase = getCursoUseCase;
    this.useCase = this.useCase;
  }

   

      public async handle(req: Request, resp: Response): Promise<void> {
        try {
          const { idCurso, nome, descricao, duracao, nivel, coordenador } = req.body;
    
          console.log("CursoController.handle() chamado", req.body);
    
          const cursoData: ICurso = { idCurso, nome, descricao, duracao, nivel, coordenador };
          const resultado = await this.useCase.perform(cursoData);
    
          resp.status(200).json({ mensagem: "Curso processado com sucesso", resultado }).end();
        } catch (error) {
          const errorMessage = (error as Error).message;
          resp.status(400).json({ mensagem: "Erro ao processar curso", erro: errorMessage }).end();
        }
      }


}