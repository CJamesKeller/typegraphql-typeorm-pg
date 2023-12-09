import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1702102391610 implements MigrationInterface {
    name = 'Initial1702102391610'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "person" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "birthday" TIMESTAMP NOT NULL, CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "person"`);
    }

}
