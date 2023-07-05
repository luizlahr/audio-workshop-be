import { UpdateContactDTO } from '@domain/contact/dtos/update-contact.dto';
import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import { BasicContactInput } from './basic-contact.input';

@InputType()
export class UpdateContactInput
  extends PartialType(BasicContactInput)
  implements Partial<UpdateContactDTO>
{
  @IsString()
  @IsNotEmpty({ message: 'campo obrigatório' })
  @Field()
  name: string;

  @IsIn(['fisica', 'juridica'], { message: 'valor inválido' })
  @Field()
  type: string;
}
