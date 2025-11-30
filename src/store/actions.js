import useAPI from '@/composables/useAPI.js'

const { api } = useAPI()

export function searchMeals({commit}, keyword) {
    api.get(`search.php?s=${keyword}`)
        .then(({data}) => {
            commit('setSearchedMeals', data.meals)
        })
}

export function searchMealsByLetter({commit}, keyword) {
    api.get(`search.php?f=${keyword}`)
        .then(({data}) => {
            commit('setMealsByLetter', data.meals)
        })
}

export function searchMealsByIngredient({commit}, ingredient) {
    api.get(`search.php?i=${ingredient}`)
        .then(({data}) => {
            commit('setMealsByIngredient', data.meals)
        })
}