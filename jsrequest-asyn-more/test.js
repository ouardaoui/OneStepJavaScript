// Promise 
const myPromise = new Promise((resolve,rejecte) =>{
    setTimeout(() =>{
        resolve("all is right")
    },1000)
})

let check = myPromise.then(reslt =>{
    console.log(reslt)
},err =>{
    console.log("err")
})

//setter and getter 
let studentInfo = {
    firstName : "Ahmed",
    lastName : "landa",
    get fullName() {
        return `my name is ${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        [this.firstName,this.lastName] = value.split(" ")
    }
}
studentInfo.fullName = "Ayoub Assad"
console.log(studentInfo.fullName)


let upper = {
    get fullName(){
        return this._fullName
    },
    set fullName (value) {  
        this._fullName = value.toUpperCase()
    } 
}
upper.fullName = "ayoub assad"
console.log(upper.fullName)