import { Controller, Get, Render, UseGuards } from "@nestjs/common";
import { AppService } from './app.service';
import { AuthGuard } from "@nestjs/passport";
import { User } from "./entity/user";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home/index')
  index() {
    return {message: 'HomeController@index.ts'};
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('/hello')
  getHello(): Promise<User[]> {
    return this.appService.findAll();
  }
}
