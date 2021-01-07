import { IsNumber, IsOptional, IsString } from 'class-validator'; //유효성검사 라이브러리

export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsOptional()
  @IsString({ each: true }) //각각의 요소를 하나씩 검사한다.
  readonly genres: string[];
}
