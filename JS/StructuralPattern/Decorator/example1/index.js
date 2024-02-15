class Froyo {
    constructor(flavour, price) {
        this.flavour = flavour;
        this.price = price;
    }

    orderPlaced() {
        console.log(`Your have ordered froyo of flavour ${this.flavour} and it will cost you ${this.price}`)
    }
}

function addFlavour(froyo) {
    froyo.addStrawberry = true;
    froyo.addVanilla = true;
    froyo.price += 20;

    froyo.updatedInfo = function() {
        console.log(`The updated price after adding flavours is ${froyo.price}`)
    }
}

function addToppings(froyo) {
    froyo.hasSprinkles = true;
    froyo.hasBrownie = true;
    froyo.hasWafers = true;

    froyo.updatedInfo = function() {
        console.log(`Your froyo now has sprinkles, brownie and wafers`)
    }
}

const f1 = new Froyo('Chocolate', 10);
f1.orderPlaced()
addFlavour(f1)
f1.updatedInfo()

addToppings(f1)
f1.updatedInfo()