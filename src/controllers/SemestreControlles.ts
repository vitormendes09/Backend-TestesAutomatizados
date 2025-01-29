import {Response, Request} from 'express';

export class SemestreController{
    async createSemestre(req: Request, res: Response){
        res.send('Semestre creado');
    }
}