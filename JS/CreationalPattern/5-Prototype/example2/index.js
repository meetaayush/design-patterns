// The wrong approach. This way, each object gets it's own copy of punch and kick fucntions. Imagine
// if we have 1000 objects,then each object will get it's own copy of the function
// This will clutter the memory.

function Ninja_Wrong(name) {
    this.name = name;
    this.points = 100;

    this.kick = function(player) {
        if (this.canAttack(player)) {
            player.points -= 50
            console.log(`${player.name}'s points are ${player.points}`)
        } else {
            console.log(`Can't kick ${player.name}`)
        }
    }

    this.punch = function(player) {
        if (this.canAttack(player)) {
            player.points -= 20
            console.log(`${player.name}'s points are ${player.points}`)
        } else {
            console.log(`Can't punch ${player.name}`)
        }
    }

    this.canAttack = function(player) {
        return this.points > 0 && player.points > 0
    }
}

// The correct approach. Here the functions are shared using protoype inheritance
function Ninja(name) {
    this.name = name;
    this.points = 100;
}

Ninja.prototype.kick = function(player) {
    if (this.canAttack(player)) {
        player.points -= 50
        console.log(`${player.name}'s points are ${player.points}`)
    } else {
        console.log(`Can't kick ${player.name}`)
    }
}

Ninja.prototype.punch = function(player) {
    if (this.canAttack(player)) {
        player.points -= 20
        console.log(`${player.name}'s points are ${player.points}`)
    } else {
        console.log(`Can't punch ${player.name}`)
    }
}

Ninja.prototype.canAttack = function(player) {
    return this.points > 0 && player.points > 0
}

var ninja1 = new Ninja("Ninja1")
var ninja2 = new Ninja("Ninja2")
ninja1.kick(ninja2)
ninja2.punch(ninja1)
ninja1.kick(ninja2) 
ninja1.punch(ninja2) 
ninja2.kick(ninja1)