import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput) {
    // args - (password, salt rounds);
    const hashedPassword = await bcrypt.hash(createUserInput.password, 10);

    const newUser = await this.prisma.user.create({
      data: {
        nickname: createUserInput.nickname,
        firstName: createUserInput.firstName,
        lastName: createUserInput.lastName,
        bio: createUserInput.bio,
        email: createUserInput.email,
        password: hashedPassword,
        // Поля isEmailVisible и isNameVisible получат true по умолчанию, если это задано в Prisma schema
      },
    });
    return newUser;
  }



  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
