import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user';
import { TypeOrmModule as DatabaseModule } from '../typeorm.module';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([User])
  ],
  providers: [UsersService],
  exports: [UsersService, TypeOrmModule.forFeature([User])]
})
export class UserModule {}
