import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const getID = () => Math.floor(Math.random() * 1000000)

//quotes are from fullstackopen part 1
const initialAnecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const anecdotes = []

for (const anecdote of initialAnecdotes) { //we shouldn't use object with ID as keys, turning properties into array then back again guarantees worst time complexity
  anecdotes.push({ anecdote: anecdote, vote: 0, id: getID() })
}

const anecdoteReducer = (state = anecdotes, action) => {
  let newAnecdotes
  switch (action.type) {
    case 'VOTE'://sort anecdotes in descending order of likes 
      newAnecdotes = state.map(anecdote => (anecdote.id === action.data.id) ? { ...anecdote, vote: anecdote.vote += 1 } : anecdote)
      newAnecdotes.sort((first, second) => second.vote - first.vote)
      return newAnecdotes
    case 'NEW ANECDOTE':
      newAnecdotes = state.concat({ anecdote: action.data.anecdote, vote: 0, id: getID() })
      return newAnecdotes
    default:
      return state
  }
}

const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'VOTE':
      return `You have voted on '${action.data.anecdote}'!`
    case 'NEW ANECDOTE':
      return `you have create '${action.data.anecdote}'`
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
    type: 'NEW ANECDOTE',
    data: {
      anecdote
    }
  }
}

const addVote = (id, anecdote) => {
  return {
    type: 'VOTE',
    data: {
      id,
      anecdote
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

export default store
export { addAnecdote, addVote, resetNotification, searchInAnecdote }