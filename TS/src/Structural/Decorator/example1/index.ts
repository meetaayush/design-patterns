abstract class BasePizza {
  public abstract cost(): number;
}

class VeggieDelight extends BasePizza {
  cost(): number {
    return 100;
  }
}

class NonVeggieDelight extends BasePizza {
  cost(): number {
    return 120;
  }
}

abstract class ToppingDecorator extends BasePizza {}

class ExtraCheeze extends ToppingDecorator {
  private basePizza: BasePizza;

  constructor(bp: BasePizza) {
    super();
    this.basePizza = bp;
  }

  cost(): number {
    return this.basePizza.cost() + 10;
  }
}

class ExtraMushroom extends ToppingDecorator {
  private basePizza: BasePizza;

  constructor(bp: BasePizza) {
    super();
    this.basePizza = bp;
  }

  cost(): number {
    return this.basePizza.cost() + 20;
  }
}

const baseVeggieDelight = new VeggieDelight();
const veggieWithCheeze = new ExtraCheeze(baseVeggieDelight);
const veggieWithMushroomAndCheeze = new ExtraMushroom(veggieWithCheeze);
const veggieWithMushroom = new ExtraMushroom(baseVeggieDelight);

console.log(veggieWithCheeze.cost());
