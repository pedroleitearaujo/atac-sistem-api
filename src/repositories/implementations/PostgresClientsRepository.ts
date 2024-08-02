import dataSource from "../../database/ormconfig";
import { IClientsRepository } from "../IClientsRepository";
import { Client } from "../../entities/Client";

export class PostgresClientsRepository implements IClientsRepository {
  async save(client: Client): Promise<void> {
    const repo = dataSource.getRepository(Client)

    client = repo.create({...client})

    await repo.save(client)
  }

  async getClients(): Promise<Client[]> {
    const repo = dataSource.getRepository(Client)

    return await repo.find()
  }

}