import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { ValidationPipe } from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    //테스트를 실행할때마다 어플리케이션을 생성하지 않도록
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication(); //어떤 pipe로도 감싸지지 않았기 때문에 getOne으로 id 를 가질때, string 으로 타입이 나타남
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true, //이상한거 빼고 정보 전달.
        forbidNonWhitelisted: true, //이상한 request를 아예 막음.
        transform: true, //우리가 원하는 타입으로 변환. 타입을 받아서 넘겨줄때 자동으로 타입변환
      }),
    ); //유효성 검사 실시.
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome to my Movie API');
  });

  describe('/movies', () => {
    it('GET', () => {
      return request(app.getHttpServer()).get('/movies').expect(200).expect([]);
    });

    it('POST', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({
          title: 'TEST',
          year: 2020,
          genres: ['test'],
        })
        .expect(201);
    });

    it('DELETE', () => {
      return request(app.getHttpServer()).delete('/movies').expect(404);
    });
  });

  describe('/movies/:id', () => {
    it('GET 200', () => {
      return request(app.getHttpServer()).get('/movies/1').expect(200);
    });
    it.todo('DELETE');
    it.todo('Patch');
  });
});
