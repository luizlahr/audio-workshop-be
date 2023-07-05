import { IsPublic } from '@application/decorators/is-public-decorator';
import { JwtAuthGuard } from '@application/guards/jwt-auth.guard';
import { Order } from '@application/models/order.model';
import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

@UseGuards(JwtAuthGuard)
@Resolver(() => Order)
export class SystemResolver {
  @IsPublic()
  @Query(() => String, { name: 'healthy' })
  list() {
    return 'Beep... Beep... Beep...';
  }
}
