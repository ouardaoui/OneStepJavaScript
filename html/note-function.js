//read existing notes from localstorage
const getSavedNotes = function() {
        const notesJSON = localStorage.getItem("note")
        if (notesJSON !== null) {
            return JSON.parse(notesJSON)
        } else {
            return []
        }
    }
    //save the note to local storage
const saveNotes = function(notes) {
        return localStorage.setItem('notes', JSON.stringify(notes))
    }
    //generate the DOM structure for a note
const generateNoteDOM = function(note) {
        const noteEl = document.createElement('p')
        if (note.title.length > 0) {
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = "unnamed note"

        }
        return noteEl
    }
    //render application notes
const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML = ''
    filteredNotes.forEach(function(note) {
        const noteEl = generateNoteDOM(note)

        document.querySelector('#notes').appendChild(noteEl)
    })
}