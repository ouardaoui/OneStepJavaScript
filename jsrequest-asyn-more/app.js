//callback
// getCountry('MA', (error, country) => {
//     if (error) {
//         console.log(error)
//     } else {
//         document.getElementById("name").innerHTML =country.name
//         console.log(`Country name: ${country.name}`)
        
//     }
// })


// promise
// getPromise("MA").then((country) =>{
//     console.log(country.name)
//     document.getElementById("name").innerHTML =country.name

// },(err) => {
//     console.log(err) 
// })

//fetch


getLocation().then((location) => {
    return getCountry(location.country)
}).then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(`Error: ${err}`)
})