import { Dish } from "./dish";

export class Dessert extends Dish {
  public slicesNumber: number;
  constructor(
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number,
    slicesNumber: number
  ) {
    super(price, cost, ingredients, timeToCook);
    this.slicesNumber = slicesNumber;
  }

  public getSlicePrice(): number {
    return this.price / this.slicesNumber;
  }

  public cook(): void {
    console.log("Baking Dessert");
  }
}

const brigadeiro = new Dessert(100, 20, ["leite condensado"], 100, 10);
console.log(brigadeiro.getSlicePrice());
console.log(brigadeiro.getProfit());

const boloDeChocolate = new Dessert(50, 20, ["farinha de trigo", "fermento", "leite condensado", "achocolatado"], 60, 8);
console.log(boloDeChocolate.getSlicePrice());
console.log(boloDeChocolate.getProfit());
