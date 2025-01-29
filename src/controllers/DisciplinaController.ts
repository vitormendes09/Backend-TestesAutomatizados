import { Request, Response } from "express";
import { IDisciplinaController } from "../../src/contracts/controllerContracts/IDisciplinaController";
import { IUseCase } from "../../src/contracts/useCaseContracts/IUseCase";
import { IDisciplina } from "../../src/contracts/entityContracts/IDisciplina";

export class DisciplinaController implements IDisciplinaController {
    private useCase: IUseCase<any, any>;
  
    constructor(useCase: IUseCase<any, any>) {
      console.log("DisciplinaController instanciado");
      this.useCase = useCase;
    }
  
    public async handle(req: Request, resp: Response): Promise<void> {
      try {
        const { idDisciplina, nome, cargaHoraria, professor, idSemestre } = req.body;
  
        console.log("DisciplinaController.handle() chamado", req.body);
  
        const disciplinaData: IDisciplina = {
            idDisciplina, nome, cargaHoraria, idSemestre,
            codigo: "",
            tipo: ""
        };
        const resultado = await this.useCase.perform(disciplinaData);
  
        resp.status(200).json({ mensagem: "Disciplina processada com sucesso", resultado }).end();
      } catch (error) {
        const errorMessage = (error as Error).message;
        resp.status(400).json({ mensagem: "Erro ao processar disciplina", erro: errorMessage }).end();
      }
    }
  }