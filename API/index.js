const axios = require('axios')

// axios promise based 
axios({
    url : "/todos/3",
    baseURL : "https://jsonplaceholder.typicode.com",
    method :"get"
}).then((response) => {
    console.log(response.data)
}).catch((err) =>{
    console.log(err)
}).then(() =>
console.log("end http requist") //always excuted
)

// Response Get with params 

// axios({
//     url : "/todos",
//     baseURL : "https://jsonplaceholder.typicode.com",
//     method :"get",
//     params :{
//         userId :2
//     }
// }).then((response) => {
//     console.log(response.data)
// }).catch((err) =>{
//     console.log(err)
// }).then(() =>
// console.log("end http requist") //always excuted
// )

// request methed aliases (as fucntion) request(config) get delete head options =>(url[, config])  post put patch (url[, data[, config]]) 

// axios.get("https://jsonplaceholder.typicode.com/todos",{
//     params :{
//         id : 30
//     }
// }).then((response) => {
//     console.log(response.data)
// }).catch((err) =>{
//     console.log(err)
// }).then(() =>
// console.log("end http requist") //always excuted
// )

// use async/await with axios

// const getData = async () =>{
//     try {
//         const response = await axios.get("https://jsonplaceholder.typicode.com/todos/49")
//         console.log(response.data)
//     }catch(e){
//         console.log(err)
//     }
// }
// getData()
// console.log("get start ...")


// const todoUser3 = axios.create({
    
//     baseURL : "https://jsonplaceholder.typicode.com",
// });

// const getData = async () =>{
//     try {
//         const response = await todoUser3.get("/todos/54")
//         console.log(response.data)
//     }catch(e){
//         console.log(err)
//     }
// }
// getData()
// console.log("get start ...")

// Global axios default axios.defaults.baseURL
const todos = axios.create()
todos.defaults.baseURL = "https://jsonplaceholder.typicode.com"

const getData = async () =>{
    try {
        const response = await todos.get("/todos/100")
        console.log(response.data)
    }catch(e){
        console.log(err)
    }
}
getData()
console.log("get start ...")

