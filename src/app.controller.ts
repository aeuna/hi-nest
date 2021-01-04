import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//컨트롤러는 그냥 url을 가져오는 역할.
//url을 가져오고 function을 반환.

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //express의 get router 같은 역할.
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  sayHello(): string {
    return this.appService.getHi();
  }
}
