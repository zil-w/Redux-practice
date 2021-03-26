import React from 'react'
import AnecdoteList from './components/AnecdoteList'
import NewAnecdote from './components/NewAnecdote'
import Notification from './components/Notification'
import SearchBar from './components/SearchBar'

const App = () => {

    return (
      <div>
        <h1>Anecdotes</h1>
        <Notification />
        <SearchBar />
        <AnecdoteList />
        <NewAnecdote />    
      </div>
    )
}
  

export default App