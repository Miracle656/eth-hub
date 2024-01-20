import React from 'react'
import './ChatPane.css'
import con_image from '../assets/csnip.png'

function ChatPane() {
  return (
    <div className="chat_pane">
      <h1>Chats</h1>
      <div className="chat_contact">
        <img src={con_image} alt="contact_image" className="contact_image" />
        <p className="contact_name">John Doe</p>
      </div>
      <div className="chat_contact">
        <img src={con_image} alt="contact_image" className="contact_image" />
        <p className="contact_name">Malan Havard</p>
      </div>
      <div className="chat_contact">
        <img src={con_image} alt="contact_image" className="contact_image" />
        <p className="contact_name">John Smith</p>
      </div>
    </div>
  )
}

export default ChatPane
