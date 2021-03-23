const getID = () => Math.floor(Math.random()*1000000)

const initialAnecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const anecdotes = []//is using a map really the best way? we also need a field for id can this be arranged by having object as property value?
//const anecdotes = {}

// for (const anecdote of initialAnecdotes) {
//     anecdotes.push({anecdote, vote: 0, id: getID()})
// }

for (const anecdote of initialAnecdotes) { //we cannot do this because we have to sort, turning properties into array then back again guarantee worst time complexity
    anecdotes.push({anecdote: anecdote, vote: 0, id:getID()})
}

const noteReducer = (state = anecdotes, action) => {
    //let newAnecdotes = {...state}
    let newAnecdotes
    switch (action.type) {
        case 'VOTE': //we might need to sort here as well, fuck
            //newaAnecdoteMap[action.data.anecdote] += 1
            newAnecdotes = state.map(anecdote => (anecdote.id === action.data.id) ? {...anecdote, vote: anecdote.vote += 1} : anecdote)
            newAnecdotes.sort((first, second) => second.vote - first.vote)
            return newAnecdotes
        case 'NEW ANECDOTE':
            //newAnecdotes[getID()] = { anecdote: action.data.anecdote, vote: 0 }
            newAnecdotes = state.concat({anecdote:action.data.anecdote, vote: 0, id: getID()})
            return newAnecdotes
        default:
            return state
    }
}

const addAnecdote = anecdote => {
    return {
        type: 'NEW ANECDOTE',
        data: {
            anecdote
        }
    }
}

const addVote = id => {
    return {
        type: 'VOTE',
        data: {
            id
        }
    }
}

export default noteReducer
export {addAnecdote, addVote}