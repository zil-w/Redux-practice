import React from 'react'
import { addAnecdote, resetNotification } from './reducer'
import anecdoteService from '../utils/anecdoteService'
import { useDispatch } from 'react-redux'

const NewAnecdote = () => {
  const dispatch = useDispatch()

  const handleSubmission = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    const returnedAnecdote = await anecdoteService.postAnecdote({content, votes:0}) 

    dispatch(addAnecdote(returnedAnecdote))
    event.target.anecdote.value = ''
    setTimeout(() => dispatch(resetNotification()), 5000)//is this really the best way to do this?
  }

  return (
    <>
      <h2>Add a new anecdote:</h2>
      <form onSubmit={handleSubmission}>
        <input name='anecdote' type='text' />
        <button type='submit'>Add</button>
      </form>
    </>
  )
}

export default NewAnecdote