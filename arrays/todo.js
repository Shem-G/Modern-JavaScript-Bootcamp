const todos = ['Learn JS', 'Make bird game', 'Make website', 'Get healthy', 'Play games']

todos.splice(2, 1)
todos.push('Finish this module')
todos.shift()

console.log(`You have ${todos.length} todos on your list`)

//1. First item
// 2. Second item

todos.forEach(function (item, index){
    const num = index + 1
    console.log(`${num}. ${item}`)
})