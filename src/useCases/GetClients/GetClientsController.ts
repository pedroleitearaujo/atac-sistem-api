import { Request, Response } from "express";
import { GetClientsUseCase } from "./GetClientsUseCase";

export class GetClientsController {
  constructor(
    private getClientsUseCase: GetClientsUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const client = await this.getClientsUseCase.execute()

      return response.status(200).json(client);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}