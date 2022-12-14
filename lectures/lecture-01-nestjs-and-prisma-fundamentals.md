# NestJS and Prisma Fundamentals

- Prisma

  - (terminal) Install prisma CLI: `yarn add prisma -D`;
  - (terminal) Install prisma Client: `yarn add @prisma/client`;
  - (terminal) Initialize prisma config using SQLite: `npx prisma init --datasource-provider SQLite`;
  - (schema.prisma) Add models;
  - (terminal) Run migrations: `npx prisma migrate dev`;
  - (terminal) Set migration name: `create notifications`;
  - (terminal) Visualize dataset: `npx prisma studio`;

- Decorators
  - In frameworks such as Express and Fastify, we usually have direct access to request and response objects;
  - In NestJS we use decorators for everything;
