const notes = [{
    title: "My next trip",
    body: "I would like to visit spain"
}, {
    title: "Habbits to week on",
    body: "Exercice,eating ..."
}, {
    title: "offivce modification",
    body: "get a new set"
}]
document.querySelector('button').addEventListener('click', function(e) {
    e.target.textContent = 'the button was clicked'
})