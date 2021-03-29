import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducer'

const reducers = combineReducers({
    anecdotes:reducer.anecdoteReducer,
    notification: reducer.notificationReducer,
    filter: reducer.filterReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store