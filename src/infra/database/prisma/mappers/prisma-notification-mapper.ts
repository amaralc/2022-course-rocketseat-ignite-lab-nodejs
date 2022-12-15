import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { Notification as PrismaNotification } from '@prisma/client';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
      canceledAt: notification.canceledAt,
    };
  }

  static toDomain(prismaNotification: PrismaNotification): Notification {
    console.log('toDomainPrisma', prismaNotification);
    return new Notification(
      {
        category: prismaNotification.category,
        content: new Content(prismaNotification.content),
        recipientId: prismaNotification.recipientId,
        canceledAt: prismaNotification.canceledAt,
        createdAt: prismaNotification.createdAt,
        readAt: prismaNotification.readAt,
      },
      prismaNotification.id,
    );
  }
}
