const { Meal, MealBuilder } = require("./index")

const m1 = new Meal();
const nvMealBuilder = new MealBuilder("chicken", "cheese", "coke")
const vegMealBuilder = new MealBuilder("paneer", "tofu", "sprite")

const chickenMeal = m1.make(nvMealBuilder)
const paneerMeal = m1.make(vegMealBuilder)

console.log(chickenMeal.display())
console.log(paneerMeal.display())