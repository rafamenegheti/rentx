import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private improtCategoryUseCase: ImportCategoryUseCase) {}
  handle(request: Request, response: Response) {
    const { file } = request;
    this.improtCategoryUseCase.execute(file);

    return response.send();
  }
}

export { ImportCategoryController };
