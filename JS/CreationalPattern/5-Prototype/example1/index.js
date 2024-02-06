var car = {
    drive() {
        console.log("Started driving")
    },

    brake() {
        console.log("Applied brakes")
    },
    numberOfWheels: 4
}

var car1 = Object.create(car, { color: {value: "red"} })
var car2 = Object.create(car, { color: {value: "black"}, numberOfWheels: { value: 5 } })

console.log(car1.drive())
console.log(car2.drive())
console.log(car1.color)
console.log(`Car1 has ${car1.numberOfWheels} wheels`)
console.log(`Car2 has ${car2.numberOfWheels} wheels`)