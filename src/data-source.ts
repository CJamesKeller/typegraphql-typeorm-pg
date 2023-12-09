import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import { Person } from "./entities/Person";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: "all",
    entities: [Person],
    migrations: ["./migration/*.ts"],
});
