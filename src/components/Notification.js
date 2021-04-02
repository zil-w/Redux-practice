import React from 'react'
import { connect } from 'react-redux' //connect is actually from react-redux

//the styling 'style' is based from https://fullstackopen.com/en/part6/many_reducers
const Notification = props => {
  const notifyingMsg = props.notification

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

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification