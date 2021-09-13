let MyAccount={
    name:"Ayoub ouardaoui",
    expenses:0,
    income:0 
}
let a=MyAccount
a.income=30
a={}
let AddExpense = function(account,amount){
    account.expenses=account.expenses+amount
}
AddExpense(MyAccount,2.5)
console.log(MyAccount)