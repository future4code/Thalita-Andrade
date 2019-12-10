import { Dish } from "./dish";

export class SaltyDish extends Dish {
  constructor(
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number
  ) {
    super(price, cost, ingredients, timeToCook);
  }

  public cook(): void {
    console.log("Starting Salty Dish")
  }
}

const feijoada = new SaltyDish(100, 20, ["feijão"], 100);
console.log(feijoada.getProfit());

const coxinha = new SaltyDish(10, 5, ["frango, farinha de trigo e catupiry"], 60);
console.log(coxinha.getProfit());
