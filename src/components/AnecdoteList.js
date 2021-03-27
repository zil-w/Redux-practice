import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'
import { addVote, resetNotification } from './reducer'


const Anecdote = ({ content, vote, handleVote }) => {
  return (
    <>
      <p>
        {content}<br />
                has {vote} <Button text='vote' handleClick={handleVote} />
      </p>
    </>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(state => {
    if (state.filter === '') {
      return state.anecdotes
    }
    else {
      return state.anecdotes.filter(anecdote => (anecdote.content.toLowerCase()).includes(state.filter.toLowerCase()))
    }
  })

  const handleVote = (id, content) => {
    return (
      () => {
        dispatch(addVote(id, content))

        setTimeout(() => dispatch(resetNotification()), 5000)//is this really the best way to do this?
      }
    )
  }

  return (
    <>
      {anecdotes.map(anecdote => {
          return <Anecdote content={anecdote.content} vote={anecdote.votes} handleVote={handleVote(anecdote.id, anecdote.content)} key={anecdote.id} />
        }
      )}
    </>
  )
}

export default AnecdoteList