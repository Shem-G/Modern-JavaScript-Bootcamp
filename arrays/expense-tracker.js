const account = {
    name: 'Hrerj',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },

    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
    
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0
        this.expenses.forEach(function(num){
            totalExpenses = totalExpenses + num.amount
        })

        this.income.forEach(function(num){
            totalIncome = totalIncome + num.amount
        })

        accountBalance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    },

}



//1. add Income array
//2. addIncome method: description, amount
//3. Tweak getAccountSummary: income - expenses

//Name has a balance of $10. $100 in income. $90 in expenses.

account.addExpense('Food', 10)
account.addExpense('Coffee', 3)
account.addExpense('Bloogi', 666)
account.addIncome('Salary', 1000)
console.log(account.getAccountSummary(account))

