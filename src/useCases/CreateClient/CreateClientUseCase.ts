import { IClientsRepository } from "../../repositories/IClientsRepository";
import { ICreateClientRequestDTO } from "./CreateClientDTO";
import { Client } from "../../entities/Client";

export class CreateClientUseCase {
  constructor(
    private clientsRepository: IClientsRepository,
  ) {}

  async execute(data: ICreateClientRequestDTO) {
    try {
      const client = new Client(data);

      console.log(data)
  
      await this.clientsRepository.save(client);
      
    } catch (error) {
      throw Error(error)
    }
  }
}