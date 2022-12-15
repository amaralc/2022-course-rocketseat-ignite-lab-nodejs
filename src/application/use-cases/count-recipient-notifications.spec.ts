import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { CountRecipientNotification } from './count-recipient-notifications';
import { NotificationNotFound } from './error/notification-not-found';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-01' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-01' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-02' }),
    );

    const countRecipientNotifications = new CountRecipientNotification(
      notificationsRepository,
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-01',
    });

    expect(count).toEqual(2);
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
