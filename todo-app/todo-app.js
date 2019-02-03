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

// You have 2 todos left (p element)
// add p for each todo (use text value)
const incompleteTodos = todos.filter(function (todo){
        return !todo.completed
    })

const message = document.createElement('p')
message.textContent = `You have todos ${incompleteTodos.length} left`
document.querySelector('body').appendChild(message)

todos.forEach(function(todo){
    const newTodo = document.createElement('p')
    newTodo.textContent = todo.text
    document.querySelector('body').appendChild(newTodo)
})