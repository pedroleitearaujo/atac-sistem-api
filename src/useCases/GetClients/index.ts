import { PostgresClientsRepository } from "../../repositories/implementations/PostgresClientsRepository";
import { GetClientsUseCase } from "./GetClientsUseCase";
import { GetClientsController } from "./GetClientsController";

const postgresClientsRepository = new PostgresClientsRepository()

const getClientsUseCase = new GetClientsUseCase(
  postgresClientsRepository
)

const getClientsController = new GetClientsController(
  getClientsUseCase
)

export { getClientsUseCase, getClientsController }