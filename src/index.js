import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import noteReducer from './components/reducer'
import App from './App'

/*
-create a store which store {quote, vote} in an array, pr maybe just use the quote as a key, done
-define the action you would need to take, vote, create new anecdote, done
-remove functionalities no longer within the scope,  such as roll anecdotes
-separate app from index.js
-add a anecdote list in charge of rendering the anecdotes in order of number of likes and handling voting
-add a new anecdote form in charge of handling adding new anecdote, use a uncontrolled form
*/

const anecdoteStore = createStore(noteReducer) //somehow by wrapping App with Provider from react-redux, we no longer need to manually subscribe the reducer function and calling it

ReactDOM.render(
  <React.StrictMode>
    <Provider store={anecdoteStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
