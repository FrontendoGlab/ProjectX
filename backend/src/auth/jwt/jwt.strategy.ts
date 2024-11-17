import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // Устанавливает, проверять ли истечение срока действия токена
      secretOrKey: process.env.JWT_ACCESS_SECRET, // Используется для валидации токена
    });
  }

  async validate(payload: {userId: number}) {
    // Payload - это данные, закодированные в JWT
    return payload.userId // Эти данные будут доступны в запросе
  }
}