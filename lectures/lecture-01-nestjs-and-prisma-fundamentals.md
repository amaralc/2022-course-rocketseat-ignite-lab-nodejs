# NestJS and Prisma Fundamentals

- Sources:
  - https://app.rocketseat.com.br/event/ignite-lab-04/nodejs/aula-2
  - https://www.youtube.com/watch?v=qAbluRQ6uf0&t=4032s

</br>

- [NestJS](https://docs.nestjs.com)
  - Opinionated, yet customizable framework;
  - Further details in next lectures as well as in [NestJS fundamentals course notes](https://github.com/amaralc/nestjs-fundamentals);

</br>

- [Prisma](https://www.prisma.io/)

  - (terminal) Install prisma CLI: `yarn add prisma -D`;
  - (terminal) Install prisma Client: `yarn add @prisma/client`;
  - (terminal) Initialize prisma config using SQLite: `npx prisma init --datasource-provider SQLite`;
  - (schema.prisma) Add models;
  - (terminal) Run migrations: `npx prisma migrate dev`;
  - (terminal) Set migration name: `create notifications`;
  - (terminal) Visualize dataset: `npx prisma studio`;

</br>

- [NestJS with Prisma](https://docs.nestjs.com/recipes/prisma)
  - Recipe using prisma as a service provider;

</br>

- [Decorators](https://docs.nestjs.com/openapi/decorators)
  - In frameworks such as Express and Fastify, we usually have direct access to request and response objects;
  - In NestJS we use decorators for everything;
