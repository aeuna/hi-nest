import { Injectable } from '@nestjs/common';
//function 모음집.
//서비스는 비지니스 로직을 실행하는 역할.

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHi(): string {
    return 'Hi Nest';
  }
}
