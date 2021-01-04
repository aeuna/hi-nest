import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//앱 모듈은 모든것의 루트 모듈 같은것.
//모듈은 장고에서의 한가지 역할을 하는 앱이라 생각.

@Module({
  imports: [],
  controllers: [AppController], //컨트롤러가 하는일 : 기본적으로 url 가져오고, 함수 실행. express의 router 같은 존재.
  providers: [AppService],
})
export class AppModule {}
