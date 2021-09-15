// const body = document.body 
// body.append("hello word")
//append require string and appendCHild required node
// const div =document.createElement("div")
// div.innerHTML = "<strong>hello world 2</strong>"//this way make secruty problem
// innerText textContent
// body.append(div)
// can use now appendChild 
//safty way hello word 2 

const div = document.querySelector("div")
const spanhi = document.querySelector("#hi")
const spanbye = document.querySelector("#bye")

div.removeChild(spanbye) 
// or spanbye.remove()