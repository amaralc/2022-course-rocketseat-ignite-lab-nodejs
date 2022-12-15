import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { Injectable } from '@nestjs/common';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: PrismaNotificationMapper.toPrisma(notification),
    });
  }

  async save(notification: Notification): Promise<void> {
    const prismaNotification = PrismaNotificationMapper.toPrisma(notification);
    console.log('prismaNotification', prismaNotification);

    await this.prismaService.notification.update({
      where: {
        id: prismaNotification.id,
      },
      data: prismaNotification,
    });
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = await this.prismaService.notification.findUnique({
      where: { id: notificationId },
    });

    console.log('findById:notification', notification);

    if (!notification) {
      return null;
    }

    const domainNotification = PrismaNotificationMapper.toDomain(notification);

    console.log('toDomain', domainNotification);

    return domainNotification;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const prismaNotifications = await this.prismaService.notification.findMany({
      where: {
        recipientId,
      },
    });

    const notifications = prismaNotifications.map((notification) =>
      PrismaNotificationMapper.toDomain(notification),
    );

    return notifications;
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const count = await this.prismaService.notification.count({
      where: { recipientId },
    });
    return count;
  }
}
