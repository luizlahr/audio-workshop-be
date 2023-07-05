import { OrderItemRepository } from '@domain/order/repositories/order-item.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@support/services/prisma.service';

@Injectable()
export class PrismaOrderItemRepository
  extends OrderItemRepository
  implements OrderItemRepository
{
  constructor(private prismaService: PrismaService) {
    super();
    this.model = this.prismaService.orderItem;
  }
}
