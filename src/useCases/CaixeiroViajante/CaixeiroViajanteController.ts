import { Request, Response } from "express";
import { CaixeiroViajanteUseCase } from "./CaixeiroViajanteUseCase";

export class CaixeiroViajanteController {
  constructor(
    private caixeiroViajanteUseCase: CaixeiroViajanteUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const caixeiroViajanteResult = await this.caixeiroViajanteUseCase.execute()

      return response.status(200).json(caixeiroViajanteResult);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}