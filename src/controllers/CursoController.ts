import { Request, Response } from "express";
import { ICursoController } from "contracts/ControllerContracts/ICursoController";
import { IUseCase } from "contracts/UseCaseContracts/IUseCase";
import { ICurso } from "contracts/EntityContracts/ICurso";

export class CursoController implements ICursoController{
    private useCase: IUseCase<any, any>;

    constructor(useCase: IUseCase<any, any>) {
        console.log("CursoController instanciado");
        this.useCase = useCase;
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