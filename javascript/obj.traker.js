let obj={
    name:"ayoub ouardaoui",
    expense:0,
    income:0
}
let AddIncomeExpense = function(account,expense,income){
    account.income=account.income+income
    account.expense=account.expense+expense
}
let getAccountSummary = function(account){
    let balance = account.income-account.expense
    return ("Account for "+account.name+" has "+ balance+"$ ."+account.income+"$ in income ."+account.expense+"$ in expense")
}
AddIncomeExpense(obj,100,200)
console.log(getAccountSummary(obj))

