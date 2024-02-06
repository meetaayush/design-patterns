function Human(name, age, sal) {
    this.name = name;
    this.age = age;
    this.sal = sal;

    this.describe = function() {
        return `${this.name} is ${this.age} years old and is getting ${this.sal} salary.`
    }
}

const p1 = new Human('Ayush', 31, 200)
const p2 = new Human('Jacob', 30, 300)
console.log(p1.describe())
console.log(p2.describe())