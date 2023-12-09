import { Field, ObjectType } from "type-graphql";
import { Person } from "../entities/Person";

@ObjectType()
export class PersonOutput extends Person {
    @Field()
    relativeDate: string;
}
