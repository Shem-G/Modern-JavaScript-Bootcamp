const todos = [{
    text: 'Learn JS',
    completed: true
}, {
    text: 'Make bird game',
    completed: false
}, {
    text: 'Make website',
    completed: false
}, {
    text: 'Get healthy',
    completed: true
}, {
    text: 'Play games',
    completed: false
}]

const filters = {
    searchText: '',
    hideCompleted: false 
}

const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function (todo){
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo){
        return !todo.completed
    })


    document.querySelector('#todo-list').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todo-list').appendChild(summary)

    filteredTodos.forEach(function (e){
        const p = document.createElement('p')
        p.innerText = e.text
        document.querySelector('#todo-list').appendChild(p)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
    
})

document.querySelector('#new-todo-form').addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        text: e.target.elements.todoText.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.todoText.value = ''    
})

document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

// 1. Create checkbox and setup event listener to "Hide completed" X
// 2. Create new hideCompleted filter (default false) X
// 3. Update hideCompleted and rerender list on checkbox change
// 4. Setup renderTodos to remove completed items