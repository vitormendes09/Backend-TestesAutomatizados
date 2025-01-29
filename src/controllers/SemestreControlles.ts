import { Request, Response } from "express";
import { ISemestreController } from "contracts/ControllerContracts/ISemestreController";
import { IUseCase } from "contracts/UseCaseContracts/IUseCase";
import { ISemestre } from "contracts/EntityContracts/ISemestre";

export class semestreController implements ISemestreController{

    private useCase: IUseCase<any, any>;

    constructor(useCase: IUseCase<any, any>) {
        console.log("SemestreController instanciado");
        this.useCase = useCase;
      }

      public async handle(req: Request, resp: Response): Promise<void> {
        try {
          const { idSemestre, numero} = req.body;
    
          console.log("SemestreController.handle() chamado", req.body);
    
          const semestreData: ISemestre = { idSemestre, numero };
          const resultado = await this.useCase.perform(semestreData);
    
          resp.status(200).json({ mensagem: "Semestre processado com sucesso", resultado }).end();
        } catch (error) {
          resp.status(400).json({ mensagem: "Erro ao processar semestre", erro: (error as any).message }).end();
        }
      }

}