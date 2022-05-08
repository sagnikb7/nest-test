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

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `This returns all coffee ${limit} ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This returns one coffee with id:${id}`;
  }

  @Post()
  create(@Body() body) {
    return `This creates a coffee ${JSON.stringify(body)}`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This updates a coffee ${id}  ${JSON.stringify(body)}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This removes a coffee ${id}`;
  }
}
