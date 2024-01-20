import React from 'react';
import './Chat.css';
import Navbar from '../Navbar';
import ChatWindow from './ChatWindow';
import ChatPane from './ChatPane';

function Chat() {
  return (
    <div>
      <Navbar />
      <div className="chat-comp">
        {/* <ChatPane className="chat-pane" /> */}
        <ChatWindow className="chat-win"/>
      </div>

    </div>
  )
}

export default Chat
