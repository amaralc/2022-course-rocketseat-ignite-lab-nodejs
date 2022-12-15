# Domains, use cases and business logic

- Sources:
  - https://app.rocketseat.com.br/event/ignite-lab-04/nodejs/aula-2
  - https://www.youtube.com/watch?v=xbky26BIJT0&t=2s

</br>

- Keywords
  - Decoupling;
  - Repository Pattern;
  - Abstract Classes;
  - Domain Driven Design;
  - Automated Tests with Jest;
  - In memory database:
    - [Systems Design Fundamentals](https://github.com/amaralc/systems-design-fundamentals-notes/blob/main/lectures/lecture-05-storage/notes.md#memory);
    - [Martin Fowler - In Memory Test Database](https://martinfowler.com/bliki/InMemoryTestDatabase.html);

</br>

- Architecture

  - Database should be no more than a choice of tool for the persistance layer;
  - Try to develop the applications independently of the database choice;
  - A software entity do not necessarily have a 1:1 relationship to a database table (or document);
    - Sometimes an entity has no corresponding table (or documents);
    - Sometimes an entity might be represented by two or more tables (or documents);

- Repository pattern

  - Repository:
    - An intermediate between application layer and persistence layer [(Fernandes)](https://youtu.be/xbky26BIJT0?t=3537);
    - Mediates between the domain and data mapping layers using a collection-like interface for accessing domain objects [(Mee and Hieatt)](https://martinfowler.com/eaaCatalog/repository.html).

- NestJS
  - Works better with abstract classes then with interfaces (probably because the js code, after compilation, do not carry types and interfaces);

</br>

- Classes
  - Getters and Setters, used to prevent local properties from being mutated arbitrarily;
