import { CursoController } from 'controllers/cursoController';
import { ICurso } from '../../contracts/entityContracts/ICurso';
import { CreateCursoUseCase } from '../../domain/usecases/cursosUseCase/CreateCursoUseCase'
import { UpdateCursosUseCase } from '../../domain/usecases/cursosUseCase/UpdateCursoUseCase';
import { DeleteCursoUseCase } from '../../domain/usecases/cursosUseCase/DeleteCursoUseCase';
import { GetCursoUseCase } from '../../domain/usecases/cursosUseCase/GetCursoUseCase';

export function factoryCursoController() {
    const cursos: ICurso[] = [];

    const createCursoUseCase = new CreateCursoUseCase();
    const updateCursoUseCase = new UpdateCursosUseCase(cursos);
    const deleteCursoUseCase = new DeleteCursoUseCase(cursos);
    const getCursoUseCase = new GetCursoUseCase(cursos);

    const cursoController = new CursoController(createCursoUseCase, updateCursoUseCase, deleteCursoUseCase, getCursoUseCase);

    return cursoController;
}




