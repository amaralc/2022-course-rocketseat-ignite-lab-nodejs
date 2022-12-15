# Infrastructure and dependency injection

- Sources:
  - https://app.rocketseat.com.br/event/ignite-lab-04/nodejs/aula-3
  - https://www.youtube.com/watch?v=XK_auW3iuXg&t=2s

</br>

- ## Keywords

</br>

- TypeScript path configuration

</br>

- Mappers (or parsers)
  - The same entity (ex.: notification) can be represented in different data structures in different application layers;
  - Mappers (or parsers) help to convert entity entity representation in different layers of the application
- View Models
  - Same as mappers, but for the http level
  - In my opinion these are all parsers
  - Despite the instructor's words, I think naming is critical although for now we will just follow along in order to complete the workshop;
- Use cases
  - Cancel notification
    - Existing entities
    - Inverse path in mapper
    - Factory pattern (makeNotification)
  - Count notifications
  - List by recipient
  - Read notification
    - Protect read data
    - Deal with use case errors
  - Undo notification read
- Implement Prisma repository
  - Remember that the notification in the persistence layer [has a different data structure than the same entity in the application layer](https://youtu.be/XK_auW3iuXg?t=4037);
- HTTP Routes
