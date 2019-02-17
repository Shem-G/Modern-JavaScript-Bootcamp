// Fetch existing todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if(todosJSON !== null){
        return JSON.parse(todosJSON)
    } else {
        return []
    }
    
}

// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo by id
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function(todo){
        return todo.id === id
        })

        if(todoIndex > -1){
            todos.splice(todoIndex, 1)
        }
    }


// toggleTodo
const toggleTodo = function (id){
    const todo = todos.find(function(todo){
            return todo.id === id
        })
    if(todo !== undefined){
        todo.completed = !todo.completed
    }
}

// Render application todos based on filters
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
    document.querySelector('#todo-list').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo){
        document.querySelector('#todo-list').appendChild(generateTodoDOM(todo))
    })
}

// Get DOM elements for individual notes
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')
    const check = document.createElement('input')
    const span = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup todo text
    check.setAttribute('type', 'checkbox')
    check.checked = todo.completed
    check.addEventListener('click', function(){
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    todoEl.appendChild(check)

    // Setup todo text
    span.textContent = todo.text
    todoEl.appendChild(span)

    //setup button
    removeButton.textContent = 'x'
    removeButton.addEventListener('change', function (){
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    todoEl.appendChild(removeButton)
    
    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}