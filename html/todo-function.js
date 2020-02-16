//fitch existing todos from localstorage
const getSavedTodos = function() {
        const userJSON = localStorage.getItem("todos")
        if (userJSON !== null) {
            return JSON.parse(userJSON)
        } else {
            return []
        }
    }
    //save todos to localStorage
const saveTodos = function(todos) {
        return localStorage.setItem("todos", JSON.stringify(todos))
    }
    //render application todos based on filters 
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

        document.querySelector('#todos').appendChild(generateSummaryDom(incompleted))


        filteredTodos.forEach(function(todo) {

            document.querySelector('#todos').appendChild(generateTodoDOM(todo))
        })
    }
    // get the DOM elements for an individual note 
const generateTodoDOM = function(todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        return p
    }
    //get the Dom elements for list summary
const generateSummaryDom = function(incompleted) {
    const sammury = document.createElement('h2')
    sammury.textContent = `you have ${incompleted.length} todos left`
    return sammury

}