import { Injectable } from '@nestjs/common';
import { User } from "../entity/user";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from '../repository';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {
  }
  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({email: email});
  }

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async getUser(id: number): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['firstname', 'lastname', 'email'],
      where: [{ id: id }],
    });
  }

  saveUser(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  deleteUser(user: User): void {
    this.usersRepository.delete(user).then();
  }
}
