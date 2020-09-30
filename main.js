const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.recipe')

for (let recipe of recipes) {
    recipe.addEventListener('click', () => {
        const imgPath = recipe.getAttribute('id')
        const titleRecipe = recipe.querySelector('h2').textContent
        const authorRecipe = recipe.querySelector('p').textContent

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `assets/${imgPath}.png`
        modalOverlay.querySelector('h2').textContent = titleRecipe
        modalOverlay.querySelector('p').textContent = authorRecipe
    })
}

document.querySelector('.close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active')
})