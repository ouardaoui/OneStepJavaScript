const note = [{
    title: 'order cat food',
    completed: false
}, {
    title: 'Clean kitchen',
    completed: true
}, {
    title: 'do work',
    completed: false
}, {
    title: 'buy food',
    completed: true
}, {
    title: 'Exercice',
    completed: true
}]
const incompleted = note.filter(function(n) {
    return !n.completed
})
const sammury = document.createElement('h2')
sammury.textContent = `you have ${incompleted.length} todos left`
document.querySelector('body').appendChild(sammury)
note.forEach(function(note) {
    const p = document.createElement('p')
    p.textContent = note.title
    document.querySelector('body').appendChild(p)
})
document.querySelector('button').addEventListener('click', function(e) {
    console.log('Add a new to do ...')
})