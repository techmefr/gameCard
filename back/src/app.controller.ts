import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly photoService: AppService) {}

  @Get()
  getHello(): string {
    return this.photoService.getHello();
  }
}
