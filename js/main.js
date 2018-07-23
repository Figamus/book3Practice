// Javascript

// Your job is to create an object that represents a financial advisor and has the following properties and methods.

// Company (enumerable, writable, property)
// Specialty (enumerable, writable, property)
// Name (enumerable, property)
// Portfolio (non-enumerable, property) - Should display the stocks the advisor currently holds
// Worth (non-enumerable, method)
// Purchase (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
// Sell (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
// When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly. Start off with making portfolio property an array that holds transactions.

// When you invoke the worth() method, it should look at every transaction and calculate the advisor's net worth.

const advisor = Object.create (null, {
    company: {
        value: "Bank of America",
        writable: true,
        enumerable: true,
    },
    specialty: {
        value: "Investments",
        writable: true,
        enumerable: true,
    },
    name: {
        value: "Slee Z. Loan",
        enumerable: true,
    },
    portfolio: {
        value: [],
    },
    worth: {
        value: function() {
            let total = 0
            let currentValue = 0

            for(let i=0; i<advisor.portfolio.length; i++) {
            currentValue = advisor.portfolio[i]
            total += currentValue
        }
        return total
    }
    },
    purchase: {
        value: function(quantity, symbol, price){
            console.log(`Buy ${quantity} for ${symbol}${price}`)
            advisor.portfolio.push(quantity*price)
        }
    },
    sell: {
        value: function(quantity, symbol, price){
            console.log(`Sell ${quantity} for ${symbol}${price}`)
            advisor.portfolio.push((quantity*price)-((quantity*price)*2))
        }
    },
})

advisor.purchase(8, "$", 900 )
advisor.sell(10, "$", 750)
console.log(advisor.portfolio)
console.log(advisor.worth())

