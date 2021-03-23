import React from 'react'
//import { Dispatcher } from 'redux' his is no longer necessary
import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'
import { addVote } from './reducer'

//const anecdotes = useSelector(state => state) //this should also be defined inside the component 

const Anecdote = ({anecdote, vote, handleVote }) => {
    //const dispatch = useDispatch()//this has to be defined inside the component definition for some reason, and somehow this still has to respect the common parent location
    //what happens if we define a dispatch for each anecdote?
    
    return (
        <>
            <p>
                {anecdote}<br />
                has {vote} <Button text='vote' handleClick={handleVote} />
            </p>
        </>
    )
}

const AnecdoteList = () => { //oh man, we should have used an array instead, let's just see if this works, okay it does, nice
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state)
    //const anecdoteDispaly = []
    const handleVote = id => {
        return (
            () => dispatch(addVote(id))
        )
    }

    // for (const id in anecdotes) {
    //     anecdoteDispaly.push(
    //         <Anecdote
    //             anecdote={anecdotes[id].anecdote}
    //             vote={anecdotes[id].vote}
    //             handleVote={handleVote(id)}
    //             key={id}
    //         />
    //     )
    // }

    return (
        <>
            {anecdotes.map(anecdote =>
                <Anecdote anecdote={anecdote.anecdote} vote={anecdote.vote} handleVote={handleVote(anecdote.id)} key={anecdote.id} />
            )}
        </>
    )
}

export default AnecdoteList