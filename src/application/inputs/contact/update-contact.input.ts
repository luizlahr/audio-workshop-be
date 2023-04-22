import { UpdateContactDTO } from '@domain/contact/dtos/update-contact.dto';
import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsIn, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateContactInput implements UpdateContactDTO {
  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  name: string;

  @IsOptional()
  @IsIn(['fisica', 'juridica'], { message: 'valor inválido' })
  @Field({ nullable: true })
  type: string;

  @IsOptional()
  @IsEmail({}, { message: 'email inválido' })
  @Field({ nullable: true })
  email: string;
}

@InputType()
export class UpdateContactArgs {
  @Field((type) => UpdateContactInput)
  data: UpdateContactInput;

  @Field()
  contactId: string;
}
