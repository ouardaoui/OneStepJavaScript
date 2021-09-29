// const body = document.body 
// body.append("hello word")
//append require string and appendCHild required node
// const div =document.createElement("div")
// div.innerHTML = "<strong>hello world 2</strong>"//this way make secruty problem
// innerText textContent
// body.append(div)
// can use now appendChild 
//safty way hello word 2 

// or spanbye.remove()
const todos =[{
    text : "Order cat food",
    completed : false
},{
    text : "Clean kitchen",
    completed : true
},{
    text : "Buy food",
    completed : true
},{
    text : "do work",
    completed : false
},{
    text : "Exercise",
    completed : true
}
]
const filters = {searchtext : ""}
const incompleted = todos.filter(todo =>!todo.completed)
const summary = document.createElement("h2")
summary.textContent = `your have ${incompleted.length} todo`
document.querySelector("body").appendChild(summary)


todos.forEach( todo => {
    const p = document.createElement("p")
    p.textContent = `${todo.text}`
    document.querySelector("body").appendChild(p)
});

// document.querySelector("#add-option").addEventListener('click', (e) => {
//         e.target.textContent="was clicked"
// });)
document.querySelector("#add-value").addEventListener("submit",(e) =>{
    filters.searchtext = e.target.elements.input.value
    console.log(filters)
    

    e.preventDefault();
})


  
