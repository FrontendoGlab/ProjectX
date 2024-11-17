import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from 'src/user/entities/user.entity';
import { CreateUserInput } from 'src/user/dto/create-user.input';
import { UserService } from 'src/user/user.service';
import { LoginInput } from './dto/login.input';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput,
  @Context('res') res: any) {
    return await this.authService.register(createUserInput, res);
  }

  @Mutation(() => User) 
  async login(@Args("loginInput") loginInput: LoginInput,
  @Context('res') res: any) {
    return await this.authService.login(loginInput, res);
  }
}
