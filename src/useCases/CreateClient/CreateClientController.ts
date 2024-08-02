import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
  constructor(
    private createClienteUseCase: CreateClientUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, phone, coordinates_x, coordinates_y } = request.body;

    try {
      await this.createClienteUseCase.execute({
        name,
        email,
        phone,
        coordinates_x, 
        coordinates_y
      })
  
      return response.status(201).send();  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}