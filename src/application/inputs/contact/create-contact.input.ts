import { CreateContactDTO } from '@domain/contact/dtos/create-contact.dto';
import { Field, InputType } from '@nestjs/graphql';
import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import { BasicContactInput } from './basic-contact.input';

@InputType()
export class CreateContactInput
  extends BasicContactInput
  implements Partial<CreateContactDTO>
{
  @IsString()
  @IsNotEmpty({ message: 'campo obrigatório' })
  @Field({ nullable: true })
  name: string;

  @IsIn(['fisica', 'juridica'], { message: 'valor inválido' })
  @Field({ defaultValue: 'fisica', nullable: true })
  type: string;
}
