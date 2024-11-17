import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString, IsEmail, Length, IsOptional } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  @Length(3, 13)
  nickname: string;

  @Field()
  @IsString()
  @Length(3, 13)
  firstName: string;

  @Field()
  @IsString()
  @Length(3, 13)
  lastName: string;

  @Field({nullable: true})
  @IsOptional()
  @IsString()
  profilePic?: string;

  @Field({nullable: true})
  @IsOptional()
  @IsString()
  @Length(5, 500)
  bio?: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  @Length(6, 20)
  password: string;
}
