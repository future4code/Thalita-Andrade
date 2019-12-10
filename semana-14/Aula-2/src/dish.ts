export abstract class Dish {
  protected price: number;
  protected cost: number;
  protected ingredients: string[];
  protected timeToCook: number;

  constructor(
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number
  ) {
    this.price = price;
    this.cost = cost;
    this.ingredients = ingredients;
    this.timeToCook = timeToCook;
  }

  public getProfit(): number {
    return this.price - this.cost;
  }

  public abstract cook(): void;
}


// Caixa , Gerente e Chef de Cozinha. Cada um  possui suas responsabilidades
//  e salários: o primeiro (caixa) deve informar aos clientes quanto eles devem pagar,
//   a partir da comanda (uma lista dos pratos que comeram); o segundo (gerente), além de possuir 
//   as atribuições de caixa, pode contratar e demitir funcionários e o terceiro (chefe de cozinha)  
//   é o líder da cozinha, portanto pode criar novos pratos e tirar antigos do cardápio também.
//    Perceba que você pode determinar os salários de cada um. 

// Você deve criar um projeto que possibilite as seguintes funcionalidades
// Criar novos pratos que o restaurante possa vender;
// Retirar pratos à venda;
// Contratação e demissão de funcionários;
// Calcular o valor que o cliente deve pagar
