import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { type Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Person } from "../entities/Person";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import { PersonInput } from "../types/person.input";

@Resolver(Person)
export class PersonResolver {

    private readonly personRepository: Repository<Person>;

    constructor() {
        this.personRepository = AppDataSource.getRepository(Person);
    }

    @Query(_returns => [Person])
    async allPeople(): Promise<Person[]> {
        return this.personRepository.find();
    }

    @Mutation(_returns => Person)
    async addPerson(
        @Arg("person") person: PersonInput,
    ): Promise<PersonInput> {
        const newPerson = this.personRepository.create(person);
        return this.personRepository.save(newPerson);
    }

    // placed in the resolver to leave the entity "clean"
    @FieldResolver()
    relativeDate(@Root() person: Person): string {
        return formatDistanceToNowStrict(person.birthday, { addSuffix: true });
    }
}
