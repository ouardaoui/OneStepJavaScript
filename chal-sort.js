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
const sortnote =function(note){
    note.sort(function(a,b){
        if(!a.completed && b.completed){
            return -1
        }else if(!b.completed && a.completed) {
            return 1
        }else{
            return 0
        }

    })
}
sortnote(todos)
console.log(todos)