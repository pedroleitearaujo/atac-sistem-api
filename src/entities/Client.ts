import { Entity, Column, PrimaryColumn } from "typeorm"
import { v4 as uuidv4 } from 'uuid';

@Entity("clients")
export class Client {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
  
  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  coordinates_x: number;

  @Column()
  coordinates_y: number;

  constructor(props: Omit<Client, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuidv4();
    }
  }
}