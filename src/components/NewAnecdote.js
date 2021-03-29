import React from 'react'
import { addAnecdote, setNotification } from './reducer'
import { useDispatch } from 'react-redux'

const NewAnecdote = () => {
  const dispatch = useDispatch()

  const handleSubmission = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    dispatch(addAnecdote(content))
    dispatch(setNotification(`you have create '${content}'`, 5))
    event.target.anecdote.value = ''
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