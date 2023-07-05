import { Order } from '@domain/order/models/order';
import { OrderRepository } from '@domain/order/repositories/order.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@support/services/prisma.service';

@Injectable()
export class PrismaOrderRepository
  extends OrderRepository
  implements OrderRepository
{
  constructor(private prismaService: PrismaService) {
    super();
    this.model = this.prismaService.order;
    this.include = {
      customer: true,
      user: true,
    };
  }

  readOrder(orderId: number): Promise<Order> {
    this.include = {
      customer: true,
      user: true,
      items: {
        include: {
          model: true,
        },
      },
    };

    return this.model.findFirst({
      where: {
        id: orderId,
        ...this.defaultFilter,
      },
      include: this.include,
    });
  }
}
