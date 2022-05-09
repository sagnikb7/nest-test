import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Roast Mocha',
      brand: 'Brew Hub',
      flavors: ['cream', 'chocolate'],
    },
  ];

  findAll() {
    return this.coffees;
  }
  findOne(id: number) {
    const coffee = this.coffees.find((c) => c.id === id);
    if (!coffee) throw new NotFoundException(`Coffee ${id} not found`);
    return coffee;
  }
  create(createCoffeeDTO: any) {
    this.coffees.push(createCoffeeDTO);
    return createCoffeeDTO;
  }
  update(id: string, updateCoffeeDTO: any) {
    let selectedCoffee = null;
    selectedCoffee = this.findOne(id);
    if (selectedCoffee) {
      //do something
      return true;
    }
    return false;
  }
  delete(id: string) {
    const newCoffees = this.coffees.filter((c) => c.id !== +id);
    this.coffees = newCoffees;
    return this.coffees;
  }
}
