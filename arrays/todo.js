const todos = [{
    text: 'Learn JS',
    completed: true
}, {
    text: 'Make bird game',
    completed: true
}, {
    text: 'Make website',
    completed: false
}, {
    text: 'Get healthy',
    completed: false
}, {
    text: 'Play games',
    completed: false
}]

// Convert the ray of strings to objects: Text, Completed - DONE
// Create function to remove a todo by text value

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo){
        return todo.text.toLowerCase() === todoText.toLowerCase()  
    })
    if (index > -1){
        todos.splice(index, 1)
    }
}

deleteTodo(todos, 'Play Games')
console.log(todos)