import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClients1722377062454 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "clients",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "phone",
                        type: "varchar"
                    },
                    {
                        name: "coordinates_x",
                        type: "numeric"
                    },
                    {
                        name: "coordinates_y",
                        type: "numeric"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("clients");
    }

}
