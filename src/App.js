import React from 'react'
import AnecdoteList from './components/AnecdoteList'
import NewAnecdote from './components/NewAnecdote'

const App = () => {


    //let's see what happens if we don't pass a props to app, okay it just won't work
    return (
      <div>
        <h1>Anecdotes</h1>
        <AnecdoteList />
        <NewAnecdote />    
      </div>
    )
}
  

export default App