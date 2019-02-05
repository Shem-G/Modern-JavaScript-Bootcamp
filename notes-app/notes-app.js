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

document.querySelector('#create-note').addEventListener('click', function(e){
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function (){
    document.querySelectorAll('.note').forEach(function(note){
        note.remove()
    })
})