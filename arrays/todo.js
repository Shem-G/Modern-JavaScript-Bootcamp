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

const sortTodos = function () {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        }
        else {
            return 0
        }
    })
}

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo){
        return todo.text.toLowerCase() === todoText.toLowerCase()  
    })
    if (index > -1){
        todos.splice(index, 1)
    }
}

const getThingsTodo = function (todos) {
    return todos.filter(function (todo){
        return !todo.completed
    })
}

sortTodos(todos)
console.log(todos)

//console.log(getThingsTodo(todos))

//deleteTodo(todos, 'Play Games')
//console.log(todos) 