import "dotenv/config";
import path = require("path");
import { buildSchema } from "type-graphql";
import { AppDataSource } from "./data-source";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Person } from "./entities/Person";
import { PersonResolver } from "./resolvers/person.resolver";

async function bootstrap() {
    // Create TypeORM connection
    await AppDataSource.initialize();

    // Build schema for TypeGraphQL
    const schema = await buildSchema({
        resolvers: [PersonResolver],
        emitSchemaFile: path.resolve(__dirname, "schema.graphql"),
    });

    // Seed database
    const personRepository = AppDataSource.getRepository(Person);
    const defaultPerson = personRepository.create({
        name: "Hugh Mann",
        birthday: new Date(),
    });
    await personRepository.save(defaultPerson);

    // Set up server
    const server = new ApolloServer({ schema });
    const { url } = await startStandaloneServer(server, { listen: { port: 3000 } });
    console.log(`GraphQL server ready at ${url}`);
}

bootstrap().catch(console.error);
