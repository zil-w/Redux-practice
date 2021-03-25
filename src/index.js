import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './components/reducer'
import App from './App'

/*
-create a store which store {quote, vote} in an array, pr maybe just use the quote as a key, done
-define the action you would need to take, vote, create new anecdote, done
-remove functionalities no longer within the scope,  such as roll anecdotes, done
-separate app from index.js, done
-add a anecdote list in charge of rendering the anecdotes in order of number of likes and handling voting, done
-add a new anecdote form in charge of handling adding new anecdote, use a uncontrolled form, done
-add redux-devtools-extension, done
-move store creation in reducer's file, done
-add another reducer for changing notification message on action, use combineReducer along with redux devtool, done
*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
