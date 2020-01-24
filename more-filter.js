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
const filterlist = todos.filter(function(note) {
    return !note.completed
})
console.log(filterlist)