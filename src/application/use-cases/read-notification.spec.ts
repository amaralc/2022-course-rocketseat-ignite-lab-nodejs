import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './error/notification-not-found';
import { ReadNotification } from './read-notification';

describe('Read notification', () => {
  it('should be able to read  notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const notification = makeNotification({ recipientId: 'recipient-01' });

    await notificationsRepository.create(notification);

    const readNotification = new ReadNotification(notificationsRepository);

    await readNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toEqual(
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
