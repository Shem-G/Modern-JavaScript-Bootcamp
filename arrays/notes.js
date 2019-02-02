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

const sortNotes = function () {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        }
        else {
            return 0
        }
    })
}

const findNote = function (notes, noteTitle){
    return notes.find(function (note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query){
    return notes.filter(function (note, index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}



//console.log(findNotes(notes, 'work'))


//const note = findNote(notes, 'blerg get new stuff')
//console.log(note)

sortNotes(notes)
console.log (notes)