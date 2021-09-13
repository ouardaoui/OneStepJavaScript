const note = [{
    title: "My next trip",
    body: "I would like to go to spain"
}, {
    title: "Hobbits to work on",
    body: "Exercise,Eatiing a bit better"
}, {
    title: "Office modificatuion",
    body: "Get a new seat"
}]
const findnote = function(notes, notetitle) {
        return notes.find(function(notes, index) {
            return notes.title === notetitle
        })

    }
    // const findnote = function(notes,notetitle){
    //     const index= note.findIndex(function(note,index){
    //         return note.title===notetitle
    // })
    //     return note[index]
    // }
console.log(findnote(note, "My next trip"))