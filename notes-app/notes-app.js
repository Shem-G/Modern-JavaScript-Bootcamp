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

const ps = document.querySelectorAll('p')
ps.forEach(function(p){
    p.textContent = "bloogi"
})

// Add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'Cuddle up to blerj'
document.querySelector('body').appendChild(newParagraph)