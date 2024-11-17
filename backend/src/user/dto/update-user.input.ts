import { IsEmail, IsOptional, IsString, Length } from 'class-validator';
import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field({nullable: true})
  @IsOptional()
  @IsString()
  @Length(3, 13)
  firstName?: string;

  @Field({nullable: true})
  @IsOptional()
  @IsString()
  @Length(3, 13)
  lastName?: string;

  @Field({nullable: true})
  @IsOptional()
  @IsString()
  profilePic?: string;

  @Field({nullable: true})
  @IsOptional()
  @IsString()
  @Length(5, 500)
  bio?: string;

  @Field({nullable: true})
  @IsOptional()
  isEmailVisible?: boolean;

  @Field({nullable: true})
  @IsOptional()
  isNameVisible?: boolean;
}
