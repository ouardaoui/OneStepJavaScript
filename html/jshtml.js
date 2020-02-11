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
const filters = {
    searchText: ""
}
const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML = ''
    filteredNotes.forEach(function(note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}
document.querySelector('#create-note').addEventListener('click', function(e) {
    e.target.textContent = 'the button was clicked'
})
document.querySelector('#remove-all').addEventListener('click', function() {
    document.querySelectorAll('.note').forEach(function(note) {
        note.remove()
    })
})
document.querySelector('#search-text').addEventListener('change', function(e) {
    console.log(e.target.value)
    filters.searchText = e.target.value
    renderNotes(notes, filters)

})