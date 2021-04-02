import React from 'react'
import { addAnecdote, setNotification } from './reducer'
import { connect } from 'react-redux'

const NewAnecdote = props => {
  //const dispatch = useDispatch()

  const handleSubmission = (event) => {
    event.preventDefault()
    const timerID = props.notificationTimer
    if (timerID !== -1) {
      clearTimeout(timerID)
    }
    const content = event.target.anecdote.value
    // dispatch(addAnecdote(content))
    // dispatch(setNotification(`you have create '${content}'`, 5))
    props.addAnecdote(content)
    props.setNotification(`you have create '${content}'`, 5)
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

const mapStateToProps = state => {
  return {
    notificationTimer: state.notificationTimer
  }
}

const mapDispatchToProps = {
  addAnecdote,
  setNotification,
}

const ConnectedNewAnecdote = connect(mapStateToProps, mapDispatchToProps)(NewAnecdote)

export default ConnectedNewAnecdote