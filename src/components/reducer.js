import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const anecdoteReducer = (state = [], action) => {
  let newAnecdotes
  switch (action.type) {
    case 'VOTE'://sort anecdotes in descending order of likes 
      newAnecdotes = state.map(anecdote => (anecdote.id === action.data.id) ? { ...anecdote, vote: anecdote.vote += 1 } : anecdote)
      newAnecdotes.sort((first, second) => second.vote - first.vote)
      return newAnecdotes
    
    case 'NEW_ANECDOTE':
      newAnecdotes = state.concat(action.data)
      return newAnecdotes
    
    case 'INIT_ANECDOTE':
      newAnecdotes = action.data.anecdotes
      return newAnecdotes
    
    default:
      return state
  }
}

const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'VOTE':
      return `You have voted on '${action.data.content}'!`
    case 'NEW_ANECDOTE':
      return `you have create '${action.data.content}'`
    case 'RESET':
      return ''
    default:
      return state
  }
}

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH':
      return action.data.searchTerm
    default:
      return state
  }
}

const combinedReducers = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer
})

const store = createStore(
  combinedReducers,
  composeWithDevTools()
)

const addAnecdote = anecdote => {
  return {
    type: 'NEW_ANECDOTE',
    data: anecdote
  }
}

const addVote = (id, content) => {
  return {
    type: 'VOTE',
    data: {
      id,
      content
    }
  }
}

const resetNotification = () => {//I don't having component calling this in their action handler function is the best way to this, maybe subscribing the store to a function that calls this after 5 second after every action taken is a better way
  return {
    type: 'RESET'
  }
}

const searchInAnecdote = searchTerm => {
  return {
    type: 'SEARCH',
    data: {
      searchTerm
    }
  }
}

const initiateAnecdotes = anecdotes => {
  return {
    type: 'INIT_ANECDOTE',
    data: {
      anecdotes
    }
  }
}

export default store
export { addAnecdote, addVote, resetNotification, searchInAnecdote, initiateAnecdotes }