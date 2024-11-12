import { IsEmail, IsOptional, IsString, Length } from 'class-validator';
import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {

  @IsOptional()
  @IsString()
  @Length(3, 13)
  firstName?: string;

  @IsOptional()
  @IsString()
  @Length(3, 13)
  lastName?: string;

  @IsOptional()
  @IsString()
  @Length(5, 500)
  bio?: string;

  @IsOptional()
  isEmailVisible?: boolean;

  @IsOptional()
  isNameVisible?: boolean;

}
