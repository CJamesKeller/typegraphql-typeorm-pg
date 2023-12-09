import { Field, InputType } from "type-graphql";
import { type Person } from "../entities/Person";

@InputType()
export class PersonInput implements Partial<Person> {
    @Field()
    name!: string;

    @Field()
    birthday!: Date;
}
