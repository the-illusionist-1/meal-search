import {createStore} from 'vuex'
import state from './state'
import * as actions from './actions'
import * as mutations from './mutations.js'

const store = createStore({
    state,
    actions,
    mutations
})

export default store