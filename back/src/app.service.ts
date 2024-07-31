import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}
  findAll(): string {
    return 'Hello world !';
  }
}
