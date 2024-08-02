import { IClientsRepository } from "../../repositories/IClientsRepository";

export class GetClientsUseCase {
  constructor(
    private clientsRepository: IClientsRepository,
  ) {}

  async execute() {
    return await this.clientsRepository.getClients();
  }
}