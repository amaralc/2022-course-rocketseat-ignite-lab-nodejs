import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { randomUUID } from 'node:crypto';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './error/notification-not-found';

describe('Cancel notification', () => {
  it('should be able to cancel notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const notification = new Notification({
      category: 'social',
      content: new Content('My content'),
      recipientId: randomUUID(),
    });

    await notificationsRepository.create(notification);
    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);

    const cancelNotification = new CancelNotification(notificationsRepository);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel notification that does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(async () => {
      return await cancelNotification.execute({
        notificationId: 'non-existing-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
