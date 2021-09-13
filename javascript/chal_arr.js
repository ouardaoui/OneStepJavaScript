const todo=["order cat food","clean kitchen","by food","do work","Exercise"]
const todos= [{
    title:"order cat food",
    completed:true
},{
    title:"clean kitchen",
    completed:false
},{
    title:"by food",
    completed:false
},{
    title:"do work",
    completed:true
},{
    title:"Exercise",
    completed:true
}]
const delecte = function(todos,note){
    const index= todos.findIndex(function(todos){
        return todos.title === note
    })
    if(index > -1){
        todos.splice(index,1)

    }
}
delecte(todos,"by food")
console.log(todos)