# Typed GraphQL w/ PostgreSQL & Docker

## Overview

Simple GraphQL API using Node.js, Docker, TypeORM, TypeGraphQL, and PostgreSQL.
With a few basic tests to demonstrate the functionality of the API.

```
type Person = {
    name: string;
    birthday: Date;
}

Mutation addPerson(person: Person): void

Query allPeople(): Array<Person & { relativeDate: string }>
```

## Running the application

`@TODO`
