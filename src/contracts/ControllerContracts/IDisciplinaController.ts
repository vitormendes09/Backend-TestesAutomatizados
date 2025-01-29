import { Request, Response } from "express";

export interface IDisciplinaController {
  handle(req: Request, resp: Response): Promise<void>;
}
