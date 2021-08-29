const createCounter = () =>{
    let count = 0;
    return {
        increment () {
            count ++
        },
        decrement (){
            count--
        },
        get (){
            return count
        }
    }
}
const counter = createCounter()
counter.increment()
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.get())

//add fuction closures
const createAdder = (a) =>{
    return(b) => {
        return a+b
    }
}
const Add10 = createAdder(10)
console.log(Add10(-5))
// callback 
const getDataCallback = (callback) =>{
    setTimeout (() => {
        callback(undefined,'this is the data')
    },2000)
}
getDataCallback((err,data) =>{
    if(err){
        console.log(err)
    } else {
        console.log(data)
    }
}) 
//Promise
const myPromise = new Promise((resolve,reject) => {
    setTimeout(() =>{
        //resolve("promise data")
        reject("this my pronise err")
    },2000)
})
myPromise.then((data) => {
    console.log("promise data")
},(err) =>{
    console.log(err)
})
// Promise chaining
const DoublePromise = (num) => new Promise((resolve,reject) =>{
    setTimeout(() => {
        typeof num === "number" ? resolve(num*2) : console.log("err") 
    },2000)
})
DoublePromise(10).then((data) => {
    return DoublePromise(data)
}).then((data) => {
    return DoublePromise(data)
}).then((data) =>{
    console.log(data)
}).catch((err) => {
    console.log(err)
})