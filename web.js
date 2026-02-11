const input = document.querySelector('#input')
const button = document.querySelector('button')
const ul = document.querySelector('ul')
button.addEventListener('click', function (e) {
    const texttask = input.value
    if (texttask.trim() === "") return;
    else {
        const listitem = document.createElement('li')
        const removeli = document.createElement('button')
        listitem.textContent = `${texttask} :- `
        removeli.textContent = 'remove'
        removeli.addEventListener('click', function(e){
            listitem.remove()
            
        })
        listitem.appendChild(removeli)
        const complet = document.createElement('button')
        complet.textContent = 'task complet'
        complet.addEventListener('click', (e)=> {
            listitem.style.textDecoration = "line-through"
            complet.style.boxShadow = "4px 3px 5px #0468BF"
        })
        listitem.appendChild(complet)

        button.style.backgroundColor = "#84E1A8"
        ul.appendChild(listitem)
        input.value = ''
        input.focus()
    }

})

        