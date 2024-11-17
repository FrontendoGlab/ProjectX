import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from 'src/user/dto/create-user.input';
import { UserService } from 'src/user/user.service';
import { LoginInput } from './dto/login.input';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null; // при возвращении null либо нет пользователя либо неправильный пароль
  }

  async login(loginInput: LoginInput, res) {
    const { email, password } = loginInput;
    const user = await this.validateUser(email, password);

    // если нету юзера, возвращаем ошибку;
    if(!user) throw new UnauthorizedException('Invalid email or password');
    
    // новые токены
    const accessToken = this.generateAccessToken(user.id);
    const refreshToken = this.generateRefreshToken(user.id);
    await this.saveRefreshToken(user.id, refreshToken);

    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 60 * 1000, // 30 минут
    });

    user.password = '*';

    return user;
  }

  generateAccessToken(userId: number): string {
    return this.jwtService.sign(
      { id: userId },
      { secret: process.env.JWT_ACCESS_SECRET, expiresIn: '30m' },
    );
  }

  generateRefreshToken(userId: number): string {
    return this.jwtService.sign(
      { id: userId },
      { secret: process.env.JWT_REFRESH_SECRET, expiresIn: '14d' },
    );
  }

  async saveRefreshToken(userId: number, refreshToken: string): Promise<void> {
    // Удаляем старый токен
    await this.prisma.authToken.deleteMany({
      where: { userId },
    });
    
    // создаём новый токен
    await this.prisma.authToken.create({
      data: {
        userId,
        token: refreshToken,
      },
    });
  }

  async register(createUserDto: CreateUserInput, res) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const registeredUser = await this.userService.create({
      ...createUserDto,
      password: hashedPassword,
    });

    const accessToken = this.generateAccessToken(registeredUser.id);
    const refreshToken = this.generateRefreshToken(registeredUser.id);
    await this.saveRefreshToken(registeredUser.id, refreshToken);

    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 60 * 1000, // 30 минут
    });

    registeredUser.password = '*';

    return registeredUser;
  }
}
