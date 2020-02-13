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
    searchText: "",
    hideCompleted: false
}
const renderTodos = function(todos, filters) {
    let filteredTodos = todos.filter(function(todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleted = filteredTodos.filter(function(n) {
        return !n.completed
    })

    document.querySelector('#todos').innerHTML = ''

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


document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})
document.querySelector("#new-todo").addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.text.value = ""
})
document.querySelector('#check').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})