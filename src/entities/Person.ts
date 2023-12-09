import { Field, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Person {
    @Field()
    @PrimaryGeneratedColumn()
    readonly id!: number;

    @Field()
    @Column()
    name!: string;

    @Field()
    @Column()
    birthday!: Date;
}
