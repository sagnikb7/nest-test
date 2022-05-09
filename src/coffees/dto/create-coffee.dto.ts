import {isString, IsString} from 'class-validator'

export class CreateCoffeeDto {
  @isString()
  readonly name: string;

  @isString()
  readonly brand: string;

  @isString({each:true})
  readonly flavors: string[];
}
