import { Notification } from '@application/entities/notification';

export class NotificationViewModel {
  // The static keyword lets us use the method without instantiating the class
  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
    };
  }
}
