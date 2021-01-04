import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search') //search가 id 아래에 있으면 search 를 id로 생각하기때문에 위로 뺌.
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after : ${searchingYear}`;
  }

  @Get(':id') //얘가 위에 있으면 다른 get들이 작동하지 않음.
  getOne(@Param('id') movieId: string) {
    return `This will return one movies with the id : ${movieId}`;
  }

  @Post()
  create(@Body() createData) {
    return createData;
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id : ${movieId}`;
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
