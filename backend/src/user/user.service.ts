import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput) {
    const newUser = await this.prisma.user.create({
      data: {
        nickname: createUserInput.nickname,
        firstName: createUserInput.firstName,
        lastName: createUserInput.lastName,
        bio: createUserInput.bio,
        email: createUserInput.email,
        password: createUserInput.password,
        // Поля isEmailVisible и isNameVisible получат true по умолчанию, если это задано в Prisma schema
      },
    });
    return newUser;
  }

  async findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        nickname: true,
        email: true,
        firstName: true,
        lastName: true,
        bio: true,
        // profilePic: true,
        isEmailVisible: true,
        isNameVisible: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findOneById(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
