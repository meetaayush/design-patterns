let instance = null;
class Printer {
    constructor(pages) {
        this.display =  function() {
            return `You are connected to printer. You want to print ${pages} pages`
        }
    }

    static getInstance(numberOfPages) {
        if (!instance) {
            instance = new Printer(numberOfPages)
        }
        return instance
    }
}

var obj1 = Printer.getInstance(2)
var obj2 = Printer.getInstance(3)
console.log(obj1.display())
console.log(obj2.display())