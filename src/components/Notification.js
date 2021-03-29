import React from 'react'
import {useSelector} from 'react-redux'

//the styling 'style' is based from https://fullstackopen.com/en/part6/many_reducers
const Notification = () => {
  const notifyingMsg = useSelector(state => state.notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    margin: 10
  }

  const hideStyle = {
    display: 'none'
  }

  return (
    <div style={(notifyingMsg === '') ? hideStyle : style}>
      {notifyingMsg}
    </div>
  )
}

export default Notification