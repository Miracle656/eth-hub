import React from 'react'
import './MessageList.css'

function MessageList({ messages }) {
    return (
        <div className='message-list'>
            {messages.map(message => (
                <div key={message.id} className={message.sender}>
                    {message.text}
                </div>
            ))}
        </div>
    )
}

export default MessageList
