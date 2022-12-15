import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send notification', async () => {
    const sendNotification = new SendNotification();
    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'This is a notification.',
      recipientId: 'recipient-id',
    });
    expect(notification).toBeTruthy();
  });
});
