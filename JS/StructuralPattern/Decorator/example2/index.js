class SuperHero {
    constructor(name, power) {
        this.name = name
        this.power = power
    }
}

function SuperHeroWithSword(superHero) {
    superHero.sword = true;
    superHero.hasSword = function() {
        return (`${this.name}'s power is ${this.power}, and he also has a sword now`)
    }
}

function SuperHeroWithSuperSpeed(superHero) {
    superHero.superSpeed = true;
    superHero.hasSuperSpeed = function() {
        return (`${this.name}'s power is ${this.power}, and he also has the super speed now.`)
    }
}


function SuperHeroWithSpeedandSword(superHero) {
    superHero.swordAndSpeed = true;
    superHero.hasSpeedAndSword = function() {
        return (`${this.name}'s power is ${this.power}, and he also has both super speed and a sword now.`)
    }
}

var superhero1 = new SuperHero("Fire Man", "Fire")
SuperHeroWithSword(superhero1)
SuperHeroWithSuperSpeed(superhero1)
var superhero2 = new SuperHero("Ice Man", "Ice")
SuperHeroWithSpeedandSword(superhero2)