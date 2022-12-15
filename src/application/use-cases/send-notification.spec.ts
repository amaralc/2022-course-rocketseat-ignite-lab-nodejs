import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { SendNotification } from './send-notification';

const notifications: Array<Notification> = [];

const notificationsRepository: NotificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('should be able to send notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);
    await sendNotification.execute({
      category: 'social',
      content: 'This is a notification.',
      recipientId: 'recipient-id',
    });
    expect(notifications).toHaveLength(1);
  });
});
