import React from 'react'
import AnecdoteList from './components/AnecdoteList'
import NewAnecdote from './components/NewAnecdote'
import Notification from './components/Notification'

const App = () => {

    return (
      <div>
        <h1>Anecdotes</h1>
        <Notification />
        <AnecdoteList />
        <NewAnecdote />    
      </div>
    )
}
  

export default App