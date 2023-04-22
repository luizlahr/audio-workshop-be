import { User } from '@domain/user/models/User';
import { UserRepository } from '@domain/user/repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@support/services/prisma.service';

@Injectable()
export class PrismaUserRepository
  extends UserRepository
  implements UserRepository
{
  constructor(private prismaService: PrismaService) {
    super();
    this.model = this.prismaService.user;
  }

  public getByEmail(email: string): Promise<User | null> {
    return this.model.findFirst({
      where: { email, ...this.defaultFilter },
    });
  }
}
