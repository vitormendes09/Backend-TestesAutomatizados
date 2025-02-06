import { CursoController } from '../../controllers/cursoController';
import { ICurso } from '../../contracts/entityContracts/ICurso';
import { CreateCursoUseCase } from '../../domain/usecases/cursosUseCase/createCursoUseCase'
import { UpdateCursosUseCase } from '../../domain/usecases/cursosUseCase/updateCursoUseCase';
import { DeleteCursoUseCase } from '../../domain/usecases/cursosUseCase/deleteCursoUseCase';
import { GetCursoUseCase } from '../../domain/usecases/cursosUseCase/getCursoUseCase';


import{cursoControllerCreate} from '../../controllers/cursoControllers/cursoControllerCreate'
export function factoryCursoController() {

    const cursos: ICurso[] = [];

    
    const createCursoUseCase = new CreateCursoUseCase();
    const updateCursoUseCase = new UpdateCursosUseCase(cursos);
    const deleteCursoUseCase = new DeleteCursoUseCase(cursos);
    const getCursoUseCase = new GetCursoUseCase(cursos);

    const cursoController = new CursoController(createCursoUseCase, updateCursoUseCase, deleteCursoUseCase, getCursoUseCase);

    return cursoController;
}




