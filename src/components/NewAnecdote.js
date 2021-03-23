import React from 'react'
import { addAnecdote } from './reducer'
import {useDispatch} from 'react-redux'

const NewAnecdote = (props) => {
    const dispatch = useDispatch()

    const handleSubmission = event => {
        event.preventDefault()
        const anecdote =  event.target.anecdote.value
        dispatch(addAnecdote(anecdote))
        event.target.anecdote.value = ''
    }

    return (
        <>
            <h2>Add a new anecdote:</h2>
            <form onSubmit = {handleSubmission}>
                <input name='anecdote' type = 'text'/>
                <button type = 'submit'>Add</button>
            </form>
        </>
    )
}

export default NewAnecdote