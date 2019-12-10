"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dish_1 = require("./dish");
class SaltyDish extends dish_1.Dish {
    constructor(price, cost, ingredients, timeToCook) {
        super(price, cost, ingredients, timeToCook);
    }
    cook() {
        console.log("Starting Salty Dish");
    }
}
exports.SaltyDish = SaltyDish;
const feijoada = new SaltyDish(100, 20, ["feijão"], 100);
console.log(feijoada.getProfit());
const coxinha = new SaltyDish(10, 5, ["frango, farinha de trigo e catupiry"], 60);
console.log(coxinha.getProfit());
//# sourceMappingURL=saltydish.js.map