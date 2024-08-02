import { PostgresClientsRepository } from "../../repositories/implementations/PostgresClientsRepository";
import { CreateClientUseCase } from "./CreateClientUseCase";
import { CreateClientController } from "./CreateClientController";

const postgresClientsRepository = new PostgresClientsRepository()

const createClienteUseCase = new CreateClientUseCase(
  postgresClientsRepository
)

const createClientController = new CreateClientController(
  createClienteUseCase
)

export { createClienteUseCase, createClientController }