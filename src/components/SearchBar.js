import React from 'react'
import { searchInAnecdote } from './reducer'
//import {useDispatch} from 'react-redux'
import {connect} from 'react-redux'

const SearchBar = props => {
    //const dispatch = useDispatch()

    const searchHandler = (event) => {
        //dispatch(searchInAnecdote(event.target.value))
        props.processSearchTerm(event.target.value)
    }

    return (
        <div>
            Filter: <input type="text" onChange={searchHandler}/>
        </div>
    )
}

//first way to  use mapDispatchToProps
//const mapDispatchToProps = {processSearchTerm: searchInAnecdote}

//second way to use mapDispatchToProps
const mapDispatchToProps = dispatch => {
    return {
        processSearchTerm: value => {dispatch(searchInAnecdote(value))}
    }
}


const ConnectedSearchBar = connect(null, mapDispatchToProps)(SearchBar)//mapDispatchToProps must be the second argument

export default ConnectedSearchBar