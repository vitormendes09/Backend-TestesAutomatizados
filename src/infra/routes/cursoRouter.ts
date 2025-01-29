import { Router } from "express";
import { factoryCursoController } from "infra/factories/factoryControllerCurso";

const routerCurso = Router();

const cursoController = factoryCursoController();

routerCurso.get('/bsi', (req,res)=>{
    res.status(200).json({
        message: 'API de consultar grade curricular do Curso'
    })
});

routerCurso.post('/curso', (req, res) => {
    cursoController.handle(req, res);
});

routerCurso.put('/curso/:id', (req, res) => {
    cursoController.handle(req, res);
});

routerCurso.delete('/curso/:id', (req, res) => {
    cursoController.handle(req, res);
});

routerCurso.get('/curso/:id', (req, res) => {
    cursoController.handle(req, res);
});

routerCurso.get('/cursos', (req, res) => {
    cursoController.handle(req, res);
});

export { routerCurso };

