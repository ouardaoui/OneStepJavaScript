const todos = [{
    text: 'order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'do work',
    completed: false
}, {
    text: 'buy food',
    completed: true
}, {
    text: 'Exercice',
    completed: true
}]
const filters = {
    searchText = ""
}
const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleted = note.filteredTodos(function(n) {
        return !n.completed
    })
    document.querySelector('#todos').innerHTMl = ''

    const sammury = document.createElement('h2')
    sammury.textContent = `you have ${incompleted.length} todos left`
    document.querySelector('#todos').appendChild(sammury)

    filteredTodos.forEach(function(todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}
renderTodos(todos, filters)

// listen of new todos
document.querySelector('#add-todo').addEventListener('click', function(e) {
        console.log('Add a new to do ...')
    })
    // listen of todos text change
document.querySelector('#new-todo').addEventListener('input', function(e) {
    console.log(e.target.value)
})
document.querySelector('#search-text').addEvenListenner('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})