import { IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsString({ each: true }) //각각의 요소를 하나씩 검사한다.
  readonly genres: string[];
}
