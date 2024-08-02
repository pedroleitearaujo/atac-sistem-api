import { Client } from "../entities/Client";

export interface IClientsRepository {
  save(client: Client): Promise<void>;
  getClients(): Promise<Client[]>;
}