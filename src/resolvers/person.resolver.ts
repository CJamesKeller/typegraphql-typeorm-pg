import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { type Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Person } from "../entities/Person";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import { PersonInput } from "../types/person.input";
import { PersonOutput } from "../types/person.output";

@Resolver(Person)
export class PersonResolver {

    private readonly personRepository: Repository<Person>;

    constructor() {
        this.personRepository = AppDataSource.getRepository(Person);
    }

    @Query(_returns => [PersonOutput])
    async allPeople(): Promise<PersonOutput[]> {
        return this.personRepository.find().then(
            results => results.map(person => {
                const relativeDate = formatDistanceToNowStrict(person.birthday, { addSuffix: true });
                return { relativeDate, ...person };
            })
        );
    }

    @Mutation(_returns => Person)
    async addPerson(
        @Arg("person") person: PersonInput,
    ): Promise<PersonInput> {
        const newPerson = this.personRepository.create(person);
        return this.personRepository.save(newPerson);
    }
}
