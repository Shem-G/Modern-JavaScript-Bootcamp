const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Italy'
}, {
    title: 'Habits to work on',
    body: 'Get healthier and work out'
}, {
    title: 'Get new stuff',
    body: 'Order new mouse'
}]

//console.log(notes.pop())
//notes.push('My new note')

//console.log(notes.shift())
//notes.shift('My first note')

//notes.splice(1, 1, 'This is the new second item')

//notes[2] = 'This is now the new note 3'

//notes.forEach(function(item, index){
//    console.log(index)
//    console.log(item)
//})

console.log(notes.length)
console.log(notes)

const index = notes.findIndex(function (note, index){
    console.log(note)
    return note.title === 'Habits to work on'
})
console.log(index)