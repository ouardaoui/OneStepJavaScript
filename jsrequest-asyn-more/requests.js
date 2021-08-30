// const getPromise = (countryCode) => new Promise((resolve,reject)=>{
//     const countryRequest = new XMLHttpRequest()


//     countryRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
            
//             resolve(country)
//         } else if (e.target.readyStatet === 4) {
//             reject("Error")
//         }
//     })
//     countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//     countryRequest.send()
// })
    


// fetch  data 
const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then((data) => {
        return data.find((country) => country.alpha2Code === countryCode)
    })
}
const getLocation = () => {
    return fetch('http://ipinfo.io/json?token=31a5e8183e85ad').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch location')
        }
    })
}