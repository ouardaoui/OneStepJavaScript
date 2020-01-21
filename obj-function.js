let obj1 = {
    name:"Ayoub",
    age:25,
    location:"Morocco"
}
let obj2 = {
    name:"Chales",
    age:27,
    location:"England"
}
let owerobj = function(obj){
    return{
        summary1: obj.name+" will be one of good programmer in "+obj.location,
        summary2: obj.name+" have "+obj.age+" year old"
    }
}
console.log(owerobj(obj1).summary1)
console.log(owerobj(obj2).summary2)