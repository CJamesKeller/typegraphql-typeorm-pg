# Typed GraphQL w/ PostgreSQL & Docker

## Overview

Simple GraphQL API using Node.js, Docker, TypeORM, TypeGraphQL, and PostgreSQL,
with a few basic tests to demonstrate the functionality of the API.

```
type Person = {
    name: string;
    birthday: Date;
}

Mutation addPerson(person: Person): void

Query allPeople(): Array<Person & { relativeDate: string }>
```

## Running the application

Docker and all of its accompaniments must already be installed in your system.

To run locally, against an already-running postgres database, use `npm run dev`.

To run both the application and database in a Docker container, use `docker compose up --build -d`.

For more information about manual control of migrations, see [the TypeORM docs](https://typeorm.io/migrations).

## Notes

Running on Linux may incur additional penalties in the form of errors.
But if you have chosen to run this app on Linux, that is your own fault...

For `type-graphql`, version `2.0.0-beta.3` is used in order to allow Apollo Server v4 compatibility,
as stated in [this comment on an issue in the type-graphql repo](https://github.com/MichalLytek/type-graphql/issues/1543#issuecomment-1761715377).
