import { Router } from 'express';
import { factoryCursoController } from '../factories/factoryControllerCurso';

const cursoRouter = Router();
const cursoController = factoryCursoController();

cursoRouter.post('/curso', (req, res) => {
    cursoController.handle(req, res);
});

cursoRouter.put('/curso/:id', (req, res) => {
    cursoController.handle(req, res);
});

cursoRouter.delete('/curso/:id', (req, res) => {
    cursoController.handle(req, res);
});

cursoRouter.get('/curso/:id', (req, res) => {
    cursoController.handle(req, res);
});

cursoRouter.get('/cursos', (req, res) => {
    cursoController.handle(req, res);
});

export { cursoRouter };

