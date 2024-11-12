import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'Unique id of a user' })
  id: number;

  @Field({ description: 'Unique nickname of a user' })
  nickname: string;

  @Field({description: "First name of a user"})
  firstName: string;

  @Field({description: "Last name of a user"})
  lastName: string;

  @Field({nullable: true, description: "Short introduction of a user, max length 500 characters"})
  bio: string;

  @Field({ description: 'Email of the user' })
  email: string;

  @Field({ description: 'Password hash of the user' }) 
  password: string;

  @Field(() => Boolean, {description: "visibility of email for other users"})
  isEmailVisible: boolean;

  @Field(() => Boolean, {description: "visibility of name & surname for other users"})
  isNameVisible: boolean;

  @Field({ description: 'Date and time when the user was created' })
  createdAt: Date;

  @Field({ description: 'Date and time when the user was updated last time' })
  updatedAt: Date;
}