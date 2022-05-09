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
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
@Controller('coffees')
export class CoffeesController {
  constructor(private coffeeService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.coffeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coffeeService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDTO: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDTO);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateCoffeeDTO: UpdateCoffeeDto) {
    return this.coffeeService.update(id, UpdateCoffeeDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.delete(id);
  }
}
