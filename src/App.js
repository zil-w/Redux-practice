import { React, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {initiateAnecdotes} from './components/reducer'
import anecdoteService from './utils/anecdoteService'
import AnecdoteList from './components/AnecdoteList'
import NewAnecdote from './components/NewAnecdote'
import Notification from './components/Notification'
import SearchBar from './components/SearchBar'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService.getAnecdotes().then(anecdotes => {
      dispatch(initiateAnecdotes(anecdotes))
    })
  }, [dispatch])

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