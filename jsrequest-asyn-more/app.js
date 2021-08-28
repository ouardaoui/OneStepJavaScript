
getCountry('MA', (error, country) => {
    if (error) {
        console.log(error)
    } else {
        document.getElementById("name").innerHTML =country.name
        console.log(`Country name: ${country.name}`)
        
    }
})
