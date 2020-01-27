const todos = [{
    title: "order cat food",
    completed: true
}, {
    title: "clean kitchen",
    completed: false
}, {
    title: "by food",
    completed: false
}, {
    title: "do work",
    completed: true
}, {
    title: "Exercise",
    completed: true
}]
const sortNote = function(note) {
    note.sort(function(a, b) {
        if (!a.title.completed && b.completed) {
            return -1
        } else if (a.title.completed && !b.title.completed) {
            return 1
        } else {
            return 0
        }
    })
}
sortNote(todos)
console.log(todos)