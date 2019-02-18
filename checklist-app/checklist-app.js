const checklists = [{
    title: '10 pushups',
    description: 'Do 10 pushups per day',
    quantity: '10',
    checks: []},
    {
    title: 'Drink water',
    description: 'Drink 3L water a day',
    quantity: '3',
    checks: []},
]

const filters = {
    searchText: ''
}

renderChecklists(checklists, filters)

document.querySelector('#search-checklists').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderChecklists(checklists, filters)
})

document.querySelector('#new-checklist-form').addEventListener('submit', function(e){
    e.preventDefault()
    console.log(e.target.elements[0])
    checklists.push({
        title: e.target.elements[0].value,
        description: e.target.elements[1].value,
        quantity: e.target.elements[2].value,
        checks: []
    })
    e.target.elements[0].value = ''
    e.target.elements[1].value = ''
    e.target.elements[2].value = ''
   renderChecklists(checklists, filters) 
})
