import { Injectable } from '@nestjs/common';
import { InvalidOrderItemError } from '../errors/invalid-order-items.error';
import { ModelRepository } from '@domain/equipment/repositories/model.repository';
import { CreateOrderDTO } from '../dtos/create-order.dto';

@Injectable()
export class CheckInvalidItems {
  constructor(private modelRepository: ModelRepository) {}

  public async handle(items: CreateOrderDTO['items']): Promise<void> {
    const invalidItems = (
      await Promise.all(
        items.map(async (item) => {
          const model = await this.modelRepository.getById(item.model_id);
          if (!model) {
            return item.model_id;
          }
        }),
      )
    ).filter(Boolean);

    if (invalidItems.length) {
      throw new InvalidOrderItemError(invalidItems);
    }
  }
}
