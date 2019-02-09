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

//1. setup div for todos
//2. setup filters (searchText) and wire up a new filter
//3. Create a renderTodos function to render and rerender the filtered data

//starts

const filters = {
    searchText: ''
}

const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function (todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (todo){
        return !todo.completed
    })

    document.querySelector('#todo-list').innerHTML = ''

    const summary = document.createElement('p')
    summary.textContent = `You have todos ${incompleteTodos.length} left`
    document.querySelector('#todo-list').appendChild(summary)

    filteredTodos.forEach(function (e){
        const p = document.createElement('p')
        p.innerText = e.text
        document.querySelector('#todo-list').appendChild(p)
    })
 }

renderTodos(todos, filters)


document.querySelector('#add-todo').addEventListener('click', function (e){
console.log('Add a new todo')
})

//Listen for todo text change
document.querySelector('#new-todo-text').addEventListener('input', function(e){
    console.log(e.target.value)
})

document.querySelector('#search-todo').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
    
})