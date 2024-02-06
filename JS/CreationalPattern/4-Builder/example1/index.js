function Meal() {
    this.make = function(builder) {
        // follow the steps
        builder.step1();
        builder.step2();
        builder.step3();
        builder.step4();

        return builder.get();
    }
}

function MealBuilder(pattie, side, soda) {
    this.meal = null;
    this.step1 = function() {
        this.meal = new Order();
    }

    this.step2 = function() {
        this.meal.addBurger(pattie)
    }

    this.step3 = function() {
        this.meal.addSide(side)
    }

    this.step4 = function() {
        this.meal.addSoda(soda)
    }

    this.get = function() {
        return this.meal;
    }
}

function Order() {
    this.burger = null;
    this.side = null;
    this.soda = null;

    this.addBurger = function(pattie) {
        this.burger = pattie;
    }

    this.addSoda = function(soda) {
        this.soda = soda;
    }

    this.addSide = function(side) {
        this.side = side;
    }

    this.display = function() {
        console.log(`Your meal has ${this.burger} burger, ${this.side} side and ${this.soda} soda`)
    }
}

module.exports = {
    Meal,
    MealBuilder
}