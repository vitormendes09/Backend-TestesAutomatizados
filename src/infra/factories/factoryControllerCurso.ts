import { CursoController } from "controllers/CursoController";
import { CreateCursoUseCase } from "domain/usecases/CursosUseCase/CreateCursoUseCase";
import { UpdateCursosUseCase } from "domain/usecases/CursosUseCase/UpdateCursoUseCase";
import { DeleteCursoUseCase } from "domain/usecases/CursosUseCase/DeleteCursoUseCase";
import { GetCursoUseCase } from "domain/usecases/CursosUseCase/GerCursoUseCase";
import { ICurso } from "contracts/EntityContracts/ICurso";

export function factoryCursoController(){
    const cursos: ICurso[] = []; 

    const createCursoUseCase = new CreateCursoUseCase();
    const updateCursoUseCase = new UpdateCursosUseCase(cursos); 
    const deleteCursoUseCase = new DeleteCursoUseCase(cursos); 
    const getCursoUseCase = new GetCursoUseCase(cursos); 

    const cursoController = new CursoController(createCursoUseCase, updateCursoUseCase, deleteCursoUseCase, getCursoUseCase);

    return cursoController;
}




