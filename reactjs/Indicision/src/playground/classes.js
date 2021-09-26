class Person {
    constructor(name ,age =0){
        this.name = name 
        this.age = age 
    }
    getDescription(){
        return `hi my name is ${this.name} and i have ${this.age}`
    }
}
class Traveler extends Person {
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation
    }
    checkHomeLocation (){
        return !!this.homeLocation
    }
    getGreeting(){
        let des = `hi my name is ${this.name},i have ${this.age}`
        if(this.checkHomeLocation()) {
            des = des +` i'm visiting from ${this.homeLocation}`
        }
        return des
    }
}

const me = new Traveler("ayoub",27,"kenitra")
console.log(me.getGreeting())


