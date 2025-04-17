const router = require('express').Router()
const path = require('path')
const root = path.join(__dirname, '..', '..', 'public')

const recipe = require('../../../data/recipes.json')

router.get('/', (request, response) => {
    const found = recipe.map(({ id, title, image, prepTime, difficulty }) => {
        return { id, title, image, prepTime, difficulty }
    })
    response.send(found)
})

router.post('/recipe/add', (request, response) => {
    const { title, image, ingredients, instructions, prepTime, difficulty } = request.body
    const id = recipe.length + 1
    recipe.push({ id, title, image, ingredients, instructions, prepTime, difficulty })
    response.send("Completed")
})

router.get('/recipe/:id', (request, response) => {
    const { id } = request.params
    const found = recipe.find(p => p.id.toString() === id)
    if (found) response.send(found)
})

module.exports = router