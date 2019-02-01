const todos = [{
    text: 'Learn JS',
    completed: true
}, {
    text: 'Make bird game',
    completed: false
}, {
    text: 'Make website',
    completed: true
}, {
    text: 'Get healthy',
    completed: false
}, {
    text: 'Play games',
    completed: false
}]


const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo){
        return todo.text.toLowerCase() === todoText.toLowerCase()  
    })
    if (index > -1){
        todos.splice(index, 1)
    }
}

//only return false values
const getThingsTodo = function (todos) {
    return todos.filter(function (todo){
        return !todo.completed
    })
}

console.log(getThingsTodo(todos))

//deleteTodo(todos, 'Play Games')
//console.log(todos)