class IceCreamFactory {
    static createIceCream(flavour) {
        switch (flavour) {
            case "Chocolate":
                return new Chocolate()
            case "Mint":
                return new Mint()
            case "Strawberry":
                return new Strawberry()
        }
    }
}

class Chocolate {
    constructor() {
        this.icecreamFlavour = "Chocolate"
        this.message = function() {
            return  `You have chosen ${this.icecreamFlavour} flavour`
        }
    }
}

class Mint {
    constructor() {
        this.icecreamFlavour = "Mint"
        this.message = function() {
            return  `You have chosen ${this.icecreamFlavour} flavour`
        }
    }
}

class Strawberry {
    constructor() {
        this.icecreamFlavour = "Strawberry"
        this.message = function() {
            return  `You have chosen ${this.icecreamFlavour} flavour`
        }
    }
}

const chocoIceCream = IceCreamFactory.createIceCream("Chocolate")
const mintIceCream = IceCreamFactory.createIceCream("Mint")
const strawberryIceCream = IceCreamFactory.createIceCream("Strawberry")

console.log(chocoIceCream.message())
console.log(mintIceCream.message())
console.log(strawberryIceCream.message())