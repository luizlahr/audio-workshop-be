import { Contact } from '@domain/contact/models/Contact';
import { ContactRepository } from '@domain/contact/repositories/contact.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@support/services/prisma.service';

@Injectable()
export class PrismaContactRepository
  extends ContactRepository
  implements ContactRepository
{
  constructor(private prismaService: PrismaService) {
    super();
    this.model = this.prismaService.contact;
  }

  public getByEmail(email: string): Promise<Contact | null> {
    return this.model.findFirst({
      where: { email, ...this.defaultFilter },
    });
  }
}
