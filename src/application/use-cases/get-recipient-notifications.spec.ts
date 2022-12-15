import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './error/notification-not-found';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient notifications', () => {
  it('should be able to get recipient notifications', async () => {
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

    const getRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository,
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipient-01',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-01' }),
        expect.objectContaining({ recipientId: 'recipient-01' }),
      ]),
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
