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

const renderChecklists = function(checklists, filters){

    const filteredChecklists = checklists.filter(function(checkItem){
        const searchTitleMatch = checkItem.title.toLowerCase().includes(filters.searchText.toLowerCase())
        const searchDescMatch = checkItem.description.toLowerCase().includes(filters.searchText.toLowerCase())
        return searchTitleMatch || searchDescMatch
    })

    document.querySelector('#list-container').innerHTML = ''

    filteredChecklists.forEach(function(e){
            const d = document.createElement('div')
            const pTitle = document.createElement('h2')
            const pDesc = document.createElement('p')
            const pQuan = document.createElement('p')
            pTitle.innerText = e.title
            pDesc.innerText = e.description
            pQuan.innerText = `Checks remaining: ${e.quantity}`
            
            d.appendChild(pTitle)
            d.appendChild(pDesc)
            d.appendChild(pQuan)
            document.querySelector('#list-container').appendChild(d)
        })
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
