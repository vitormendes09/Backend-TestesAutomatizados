import { Request, Response } from "express";

export interface ICursoController {
  handle(req: Request, resp: Response): Promise<void>;
}
