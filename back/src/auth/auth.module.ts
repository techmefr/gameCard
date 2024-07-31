import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';
import { UsersService } from '../user/user.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [UserModule,
    JwtModule.register({
      secret: jwtConstants.secret
    })],
  providers: [UsersService, AuthService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
