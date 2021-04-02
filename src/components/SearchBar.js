import React from 'react'
import { searchInAnecdote } from './reducer'
//import {useDispatch} from 'react-redux'
import { connect } from 'react-redux'

const SearchBar = props => {

    const searchHandler = (event) => {
        props.processSearchTerm(event.target.value)
    }

    return (
        <div>
            Filter: <input type="text" onChange={searchHandler} />
        </div>
    )
}

//second way to use mapDispatchToProps
const mapDispatchToProps = dispatch => {
    return {
        processSearchTerm: value => { dispatch(searchInAnecdote(value)) }
    }
}


const ConnectedSearchBar = connect(null, mapDispatchToProps)(SearchBar)//mapDispatchToProps must be the second argument

export default ConnectedSearchBar