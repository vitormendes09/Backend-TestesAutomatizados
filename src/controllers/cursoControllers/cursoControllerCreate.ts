import { Request, Response} from "express";
import { ICursoController } from "../../contracts/controllerContracts/ICursoController"
import { ICurso } from "contracts/entityContracts/ICurso";
import { ICreateCursoUseCase } from "contracts/useCaseContracts/ICursoUseCase";

export class cursoControllerCreate implements ICursoController{

    private createCursoUseCase: ICreateCursoUseCase;

    constructor( createCursoUseCase: ICreateCursoUseCase){

        this.createCursoUseCase = createCursoUseCase

    }

    public async handle(req: Request, resp: Response): Promise<void> {

        try{
            const {idCurso, nome, descricao, duracao, nivel, coordenador} = req.body;
            console.log("cursoController.handle() chamado", req.body);

            let resultado 

            const cursoData: ICurso = { idCurso, nome, descricao, duracao, nivel, coordenador };
            resultado = await this.createCursoUseCase.perform(cursoData);

            resp.status(200).json({ mensagem: "Curso processado com sucesso", resultado }).end();

            
        } catch(error){
            const errorMessage = (error as Error).message;
            resp.status(400).json({mensagem:"Erro ao processar curso", erro: errorMessage})
        }
       
    }

}