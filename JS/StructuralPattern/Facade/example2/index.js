class Inventory {
    constructor() {
        this.shampoo = 20;
        this.conditioner = 20;
        this.hairSerum = 1000;
    }

    checkInventory(product) {
        const { productName, amount } = product;
        switch(productName) {
            case "shampoo":
                if (this.shampoo > amount) {
                    return true
                } 
                return false;
            case "conditioner":
                if (this.conditioner > amount) {
                    return true
                } else {
                    return false
                }
            case "hairSerum":
                if (this.hairSerum > amount) {
                    return true
                } else {
                    return false
                }
        }
    }
}

class BuyingProduct extends Inventory {
    buyProduct(product) {
        let order;
        if (this.checkInventory(product)) {
            order = new BuyProduct(product)
        } else {
            order = new PreorderProduct(product)
        }
        return order.showDetails()
    }
}

class BuyProduct {
    showDetails(product) {
        const { productName, amount } = product;
        console.log(`${amount} bottles of ${productName} is available for order`)
    }
}

class PreorderProduct {
    showDetails(product) {
        const { productName, amount } = product
        console.log(`${amount} bottles of ${productName} is available for pre-order`)
    }
}