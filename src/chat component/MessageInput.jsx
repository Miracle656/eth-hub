import React, { useState } from 'react'
import './MessageInput.css'
import { BsSend } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";

function MessageInput({ sendMessage }) {

    const [inputText, setInputText] = useState('');

    const handleInputChange = e => {
        setInputText(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputText.trim() !== '') {
            sendMessage(inputText, 'user');
            setInputText('');
        }
    };

    return (
        <div className='message-input'>
            <input
                className='chat-input'
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Type a message..."
            />
            <button className='attach' ><MdAttachFile /></button>
            <button className='send-button' onClick={handleSendMessage} ><BsSend /></button>
        </div>
    )
}

export default MessageInput
