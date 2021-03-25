import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'
import { addVote, resetNotification } from './reducer'


const Anecdote = ({ anecdote, vote, handleVote }) => {
  return (
    <>
      <p>
        {anecdote}<br />
                has {vote} <Button text='vote' handleClick={handleVote} />
      </p>
    </>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const handleVote = id => {
    return (
      () => {
        dispatch(addVote(id))

        setTimeout(() => dispatch(resetNotification()), 5000)//is this really the best way to do this?
      }
    )
  }

  return (
    <>
      {anecdotes.map(anecdote =>
        <Anecdote anecdote={anecdote.anecdote} vote={anecdote.vote} handleVote={handleVote(anecdote.id)} key={anecdote.id} />
      )}
    </>
  )
}

export default AnecdoteList