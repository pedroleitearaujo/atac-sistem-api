import { DataSource } from "typeorm"

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "qwerty",
    database: "atac_system",
    migrations: ["src/database/migrations/*.ts"],
    entities: ["src/entities/*.ts"]
})

dataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default dataSource;