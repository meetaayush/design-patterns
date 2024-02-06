function Loans() {
    this.getloan = function(type, amount, duration) {
        switch(type) {
            case "home":
                return new HomeLoan(amount, duration)
            case "student":
                return new StudentLoan(amount, duration)
            case "personal":
                return new PersonalLoan(amount, duration)
        }
    }
}

function HomeLoan(amount, duration) {
    this.calculateInterest = function() {
        return amount * 0.08 * duration
    }
}

function StudentLoan(amount, duration) {
    this.calculateInterest = function() {
        return amount * 0.03 * duration
    }
}

function PersonalLoan(amount, duration) {
    this.calculateInterest = function() {
        return amount * 0.05 * duration
    }
}

var loan = new Loans()

var homeLoan = loan.getloan('home',3200,5)
console.log(homeLoan.calculateInterest())

var studentLoan = loan.getloan('student',1800,4)
console.log(studentLoan.calculateInterest())

var personalLoan = loan.getloan('personal',1200,2)
console.log(personalLoan.calculateInterest())