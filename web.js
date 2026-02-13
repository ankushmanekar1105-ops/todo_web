const input = document.querySelector('#input')
const button = document.querySelector('button')
const ul = document.querySelector('ul')

button.addEventListener('click', function (e) {
    const texttask = input.value
    button.style.backgroundColor = "#84E1A8"

    if (texttask.trim() === "") return;
    else {
        const listitem = document.createElement('li')
        listitem.className = "li"

        const removeli = document.createElement('button')

        const taskText = document.createElement('span')
        taskText.textContent = `${texttask} :- `
        listitem.appendChild(taskText)
        removeli.textContent = 'remove'
        removeli.addEventListener('click', function (e) {
            listitem.remove()
            listitem.style.textDecoration = "none"

        })
        listitem.appendChild(removeli)
        const complet = document.createElement('button')
        complet.textContent = 'task complet'

        complet.addEventListener('click', (e) => {
            taskText.style.textDecoration = "line-through"
            complet.style.boxShadow = "4px 3px 5px #0468BF"
        })
        
        listitem.appendChild(complet)

        button.style.backgroundColor = ""
        ul.appendChild(listitem)
        input.value = ''
        input.focus()
    }

})

