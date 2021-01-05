//서비스로 보내고 받을 클래스(인터페이스)를 export.
//즉, movie를 구성하는 것들.

export class Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
}
