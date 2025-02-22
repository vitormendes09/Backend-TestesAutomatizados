import { Request, Response } from "express";
import { ICursoController } from "../../src/contracts/controllerContracts/ICursoController";
import { ICurso } from "../contracts/useCaseContracts/ICursoUseCase";
import { ICreateCursoUseCase, IDeleteCursoUseCase, IGetCursoUseCase, IUpdateCursoUseCase } from "../contracts/useCaseContracts/ICursoUseCase";

export class CursoController implements ICursoController {

  private createCursoUseCase: ICreateCursoUseCase;
  private updateCursoUseCase: IUpdateCursoUseCase;
  private deleteCursoUseCase: IDeleteCursoUseCase;
  private getCursoUseCase: IGetCursoUseCase;

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
  }

  public async handle(req: Request, resp: Response): Promise<void> {
    try {
      const { idCurso, nome, descricao, duracao, nivel, coordenador } = req.body;
      console.log("CursoController.handle() chamado", req.body);

      let resultado;
      switch (req.method) {
        case 'POST':
          const cursoData: ICurso = { idCurso, nome, descricao, duracao, nivel, coordenador };
          resultado = await this.createCursoUseCase.perform(cursoData);
          break;
        case 'PUT':
          const updateData = { idCurso: Number(req.params.id), data: { nome, descricao, duracao, nivel, coordenador } };
          resultado = await this.updateCursoUseCase.perform(updateData);
          if(updateData.idCurso === -1 ){
            console.log("Achei o problema")
          }
          break;
        case 'DELETE':
          resultado = await this.deleteCursoUseCase.perform(Number(req.params.id));
          break;
        case 'GET':
          if (req.params.id) {
            resultado = await this.getCursoUseCase.perform(Number(req.params.id));
          } else {
            // Retornar todos ?
          }
          break;
        default:
          throw new Error("Método não suportado");
      }

      resp.status(200).json({ mensagem: "Curso processado com sucesso", resultado }).end();
    } catch (error) {
      const errorMessage = (error as Error).message;
      resp.status(400).json({ mensagem: "Erro ao processar curso", erro: errorMessage }).end();
    }
  }
}