import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './components/store'
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
-add yet another reducer to store search term, done
-filter posts based on search term, implemented within the useSelector block, done
-make the app get anecdotes from the json server, need to implement a DB servicer, make async call in component's action handler instead of action creator, done
-make the app create new anecdote into the json server, make call in component as well, done
-add redux thunk and migrate the backend calls into the action creator, done
-make the app update anecdote vote into the json server, done
-make the notification action creator handle setting and resetting the notification message
-01/04/2021
-replace Notification's store access to connected component, done
-replace SearchBar's store access to connected component, done
-replace NewAnecdote's store access to connected component, done
-make sure that the last notification lasts the specified time length and it doesn't get hidden due to previous notification's timer, done
*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
