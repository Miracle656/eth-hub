import React from 'react'
import './ChatHeader.css'

function ChatHeader({contactName, contactImage}) {
  return (
    <div className="chat-header">
      <img src={contactImage} alt="contact_image" />
      <h2>{contactName}</h2>
    </div>
  )
}

export default ChatHeader
