import React from 'react'
import { searchInAnecdote } from './reducer'
import {useDispatch} from 'react-redux'

const SearchBar = () => {
    const dispatch = useDispatch()

    const searchHandler = (event) => {
        dispatch(searchInAnecdote(event.target.value))
    }

    return (
        <div>
            Filter: <input type="text" onChange={searchHandler}/>
        </div>
    )
}

export default SearchBar