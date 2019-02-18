

//Render checklists based on filters
const renderChecklists = function(checklists, filters){

    const filteredChecklists = checklists.filter(function(checkItem){
        const searchTitleMatch = checkItem.title.toLowerCase().includes(filters.searchText.toLowerCase())
        const searchDescMatch = checkItem.description.toLowerCase().includes(filters.searchText.toLowerCase())
        return searchTitleMatch || searchDescMatch
    })

    document.querySelector('#list-container').innerHTML = ''

    filteredChecklists.forEach(function(checklistItem){
            renderDOMStructure(checklistItem)
        })
    }

const renderDOMStructure = function (checklistItem) {
    const d = document.createElement('div')
    const pTitle = document.createElement('h2')
    const pDesc = document.createElement('p')
    const pQuan = document.createElement('p')
    pTitle.innerText = checklistItem.title
    pDesc.innerText = checklistItem.description
    pQuan.innerText = `Checks remaining: ${checklistItem.quantity}`
    
    d.appendChild(pTitle)
    d.appendChild(pDesc)
    d.appendChild(pQuan)
    document.querySelector('#list-container').appendChild(d)
}