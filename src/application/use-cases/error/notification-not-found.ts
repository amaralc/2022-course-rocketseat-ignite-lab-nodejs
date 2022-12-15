export class NotificationNotFound extends Error {
  constructor() {
    // Call constructor from parent class
    super('Notification not found');
  }
}
