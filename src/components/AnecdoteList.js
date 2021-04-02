import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'
import { addVote, setNotification } from './reducer'


const Anecdote = ({ content, vote, handleVote }) => {//component for displaying individual anecdote
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

  const anecdotes = useSelector(state => { //select anecdotes from redux store based on current filter content
    if (state.filter === '') {
      return state.anecdotes
    }
    else {
      return state.anecdotes.filter(anecdote => (anecdote.content.toLowerCase()).includes(state.filter.toLowerCase()))
    }
  })

  const timerID = useSelector(state => {
    return state.notificationTimer
  })

  const handleVote = (anecdote) => { //add vote to backend and display a vote message
    return (
      () => {
        if (timerID !== -1) {//undo existing timer for erasing notification
          clearTimeout(timerID)
        }
        dispatch(addVote(anecdote))
        dispatch(setNotification(`You have voted on '${anecdote.content}'!`, 5))
      }
    )
  }

  return (
    <>
      {anecdotes.map(anecdote => {
          return <Anecdote content={anecdote.content} vote={anecdote.votes} handleVote={handleVote(anecdote)} key={anecdote.id} />
        }
      )}
    </>
  )
}

export default AnecdoteList