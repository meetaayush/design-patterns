let orderId = 0;

const FoodType = Object.freeze({
    MainCourse: "Main Course",
    Desert: "Desert"
})

class PlaceFoodOrder {
    placeOrder(orderDetails) {
        const orderId = PlaceFoodOrder.generateOrderId()

        let chef;
        if (orderDetails.foodType === FoodType.MainCourse) {
            chef = new MainCourseChef();
        } else if (orderDetails.foodType === FoodType.Desert) {
            chef = new DesertChef()
        }

        return chef.addFoodOrder({ orderId, orderDetails })
    }

    static generateOrderId() {
        return ++orderId
    }
}

class FoodOrder {
    constructor() {
        this.orders = []
    }

    addFoodOrder(order) {
        this.orders.push(order)
        return this.conveyOrder(order)
    }

    timeToMakeOrder(){}
    conveyOrder(){}
}

class MainCourseChef extends FoodOrder {
    constructor() {
        super()
        this.assigned = true;
        return this
    }

    timeToMakeOrder() {
        return Math.floor(Math.random() * 50) + 10
    }

    conveyOrder({orderId, orderDetails}) {
        const time = this.timeToMakeOrder();
        console.log(`Order#${orderId}: ${orderDetails.foodDetails} will be served in ${time} minutes.`)
    }
}

class DesertChef extends FoodOrder {
    constructor() {
        super()
        this.assigned = true;
        return this
    }

    timeToMakeOrder() {
        return Math.floor(Math.random() * 30) + 10
    }

    conveyOrder({orderId, orderDetails}) {
        const time = this.timeToMakeOrder();
        console.log(`Order#${orderId}: ${orderDetails.foodDetails} will be served in ${time} minutes.`)
    }
}

const customer1 = new PlaceFoodOrder();

const order1 = customer1.placeOrder({foodType: FoodType.MainCourse, foodDetails: "Pasta with extra sauce"})
const order2 = customer1.placeOrder({foodType: FoodType.Desert, foodDetails: "Vanilla Icecream"})