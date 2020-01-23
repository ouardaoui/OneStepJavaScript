const account ={
    name:"ayoub ouardaoui",
    expense:[],
    Income:[],
    addExpense :function (Description,amount){
        this.expense.push({
            Description:Description,
            amount:amount
        })
    },
    addIncome :function (Description,amount){
        this.Income.push({
            Description:Description,
            amount:amount
        })
    },
    summary:function(){
        let totalexpense =0
        let totalIncome=0
        let total=0
        this.expense.forEach(function(expense){
            totalexpense= totalexpense+expense.amount
        })
        this.Income.forEach(function(Income){
            totalIncome= totalIncome+Income.amount
        })
        total =totalIncome-totalexpense
        return this.name+" has "+total+" $."
    }
}
account.addExpense("Rent",950)
account.addExpense("Coffee",2)
account.addIncome("job",1000)
account.addIncome("free",10)
console.log(account.summary())
