import { Request, Response } from "express";

export interface ISemestreController {
  handle(req: Request, resp: Response): Promise<void>;
}
