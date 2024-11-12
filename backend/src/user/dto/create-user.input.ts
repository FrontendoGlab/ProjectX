import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString, IsEmail, Length, IsOptional } from 'class-validator';

@InputType()
export class CreateUserInput {

  @IsString()
  @Length(3, 13)
  nickname: string;

  @IsString()
  @Length(3, 13)
  firstName: string;

  @IsString()
  @Length(3, 13)
  lastName: string;

  @IsOptional()
  @IsString()
  @Length(5, 500)
  bio: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(6, 20)
  password: string;


}
