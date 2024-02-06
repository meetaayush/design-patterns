function Soda(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;

    this.display = function() {
        return `This ${this.type} ${this.name} costs ${this.price}`
    }
}

function Chips(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;

    this.display = function() {
        return `This ${this.type} ${this.name} costs ${this.price}`
    }
}

function JunkFoodFactory() {
    this.createJunkFood = function(name, type, price) {
        switch(type) {
            case "Chips":
                return new Chips(name, type, price)
            case "Soda":
                return new Soda(name, type, price)
            default:
                return new Chips(name, type, price)
        }
    }
}

var fact = new JunkFoodFactory()
var chipsFact = fact.createJunkFood("Lays", "Chips", 30)
console.log(chipsFact.display())