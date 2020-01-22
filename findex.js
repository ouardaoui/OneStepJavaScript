const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
console.log(fruits)
 const index = fruits.findIndex( fruit  => fruit === "blueberries");// arrow function

 console.log(index); // 3
 console.log(fruits[index]); // blueberries

const index1 = fruits.findIndex(function(fruit){
    return fruit === "blueberries"
})
console.log(index1); // 3
console.log(fruits[index1])
