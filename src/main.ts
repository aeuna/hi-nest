import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //이상한거 빼고 정보 전달.
      forbidNonWhitelisted: true, //이상한 request를 아예 막음.
      transform: true, //우리가 원하는 타입으로 변환. 타입을 받아서 넘겨줄때 자동으로 타입변환
    }),
  ); //유효성 검사 실시.
  await app.listen(3000);
}
bootstrap();
