import { PostgresClientsRepository } from "../../repositories/implementations/PostgresClientsRepository";
import { CaixeiroViajanteUseCase } from "./CaixeiroViajanteUseCase";
import { CaixeiroViajanteController } from "./CaixeiroViajanteController";

const postgresClientsRepository = new PostgresClientsRepository()

const caixeiroViajanteUseCase = new CaixeiroViajanteUseCase(
  postgresClientsRepository
)

const caixeiroViajanteController = new CaixeiroViajanteController(
  caixeiroViajanteUseCase
)

export { caixeiroViajanteUseCase, caixeiroViajanteController }