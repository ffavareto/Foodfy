const recipes = document.querySelectorAll('.recipe')

for (let recipe of recipes) {
    recipe.addEventListener('click', () => {
        const recipeId = recipe.getAttribute('id')
        window.location.href = `/recipe?id=${recipeId}`
    })
}

function hideOrShow(el) {
    const content = document.getElementById(el).style.display

    if (content == "block") {
        document.getElementById(el).style.display = 'none'
    } else {
        document.getElementById(el).style.display = 'block'
    }
}

function toggleText(el) {
    const textToChange = document.getElementById(el)

    if (textToChange.textContent == 'MOSTRAR') {
        textToChange.textContent = 'ESCONDER'
    } else {
        textToChange.textContent = 'MOSTRAR'
    }
}