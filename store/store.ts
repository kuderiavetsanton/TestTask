import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

import thunk from 'redux-thunk'
import { Post } from '../types'

export interface State {
    state: any
    posts: Post[]
}

const initialState = { posts: [] }

export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
)

export default store
