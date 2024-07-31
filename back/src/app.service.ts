import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(@InjectRepository(User) private readonly users: Repository<User>) {
  }
  findAll(): Promise<User[]> {
    return this.users.find();
  }
}