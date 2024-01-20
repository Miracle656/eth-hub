import React, {useState} from 'react'
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import './ChatWindow.css'
import con_image from '../assets/csnip.png'

function ChatWindow() {

    const [messages, setMessages] = useState([
        { id: 1, text: 'Hello!', sender: 'user' },
        { id: 2, text: 'Hi there!', sender: 'contact' },
        { id: 1, text: 'How are you doing today!', sender: 'user' },
        { id: 2, text: 'i am good bruv and you!', sender: 'contact' },
        { id: 1, text: 'i am cool too thanks for checking!', sender: 'user' },
        { id: 2, text: 'no probs we dey together!', sender: 'contact' },
        { id: 1, text: 'so how is it going on your end!', sender: 'user' },
        { id: 2, text: 'omo we pushing my bro, we dey on God!', sender: 'contact' },
        { id: 1, text: 'norms norms thats soft!', sender: 'user' },
        { id: 2, text: 'Have you finished with what you were working on!', sender: 'contact' },
        { id: 1, text: 'Omo noo, school no give me chance but im doing it bit by bit!', sender: 'user' },
        { id: 2, text: 'thats nice tiny drops of water makes a mighty ocean!', sender: 'contact' },
        { id: 1, text: 'true true!', sender: 'user' },
        { id: 2, text: 'yh so see you later!', sender: 'contact' },
        { id: 1, text: 'you too bruv!', sender: 'user' },
        // Add more messages as needed
    ]);

    const sendMessage = (text, sender) => {
        const newMessage = { id: messages.length + 1, text, sender };
        setMessages([...messages, newMessage]);
    };
    return (
        <div className='chat-window'>
            <ChatHeader contactName="John Doe" contactImage={con_image} />
            <MessageList messages={messages} />
            <MessageInput sendMessage={sendMessage} />
        </div>
    )
}

export default ChatWindow
