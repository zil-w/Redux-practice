import anecdoteService from '../utils/anecdoteService'

const anecdoteReducer = (state = [], action) => {
  let newAnecdotes
  switch (action.type) {
    case 'VOTE'://sort anecdotes in descending order of likes 
      newAnecdotes = state.map(anecdote => (anecdote.id === action.data.votedAnecdote.id) ? action.data.votedAnecdote : anecdote)
      newAnecdotes.sort((first, second) => second.votes - first.votes)
      return newAnecdotes

    case 'NEW_ANECDOTE':
      newAnecdotes = state.concat(action.data.postedAnecdote)
      return newAnecdotes

    case 'INIT_ANECDOTE':
      newAnecdotes = action.data.anecdotes
      newAnecdotes.sort((first, second) => second.votes - first.votes)
      return newAnecdotes

    default:
      return state
  }
}

const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SHOW_MESSAGE':
      return action.data.message
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

const notificationTimerReducer = (state = -1, action) => {
  switch (action.type) {
    case 'SET_TIMEOUTID':
      return action.data.timeoutID
    case 'RESET_TIMEOUTID':
      return -1
    default:
      return state
  }
}

const addAnecdote = content => {
  return async (dispatch) => {
    const postedAnecdote = await anecdoteService.postAnecdote({ content, votes: 0 })
    dispatch({
      type: 'NEW_ANECDOTE',
      data: {
        postedAnecdote
      }
    })
  }
}

const addVote = (anecdote) => {
  return async (dispatch) => {
    const votedAnecdote = await anecdoteService.likeAnecdote(anecdote)
    dispatch({
      type: 'VOTE',
      data: {
        votedAnecdote
      }
    })
  }
}

const setNotification = (message, showTimeSec) => {//I really don't think this is gonna work, wow this works, but is there a way we can make this look nicer? accessing Redux store inside an action creator is argued to be an anti-pattern
  return async (dispatch) => {

    dispatch({
      type: 'SHOW_MESSAGE',
      data: {
        message
      }
    })

    const timeoutID = setTimeout(() => {
      dispatch({//is this like a second method call?
        type: 'RESET'
      })
      dispatch({
        type: 'RESET_TIMEOUTID'
      })
    }, (showTimeSec * 1000))

    dispatch({
      type: 'SET_TIMEOUTID',
      data: {
        timeoutID
      }
    })
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


const initiateAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAnecdotes()
    dispatch({
      type: 'INIT_ANECDOTE',
      data: {
        anecdotes
      }
    })
  }
}

const reducer = { anecdoteReducer, notificationReducer, filterReducer, notificationTimerReducer }

export default reducer
export { addAnecdote, addVote, setNotification, searchInAnecdote, initiateAnecdotes }