import React, { useState } from 'react'
import './ChatPanel.css'
import ChatPane from '../chat component/ChatPane';
import { MdKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

// import { BiMessageAdd } from "react-icons/bi";

function ChatPanel() {

    const [activePane, setActivePane] = useState(true);

    const panefunction = () => {
        setActivePane(!activePane)
    }
    return (
        <div className='panel'>
            <div className="pane-ctrl">
                <p className="panehead">Messages</p>
                <div className="paneico" onClick={panefunction}>
                    {activePane ? <MdKeyboardDoubleArrowDown /> : <MdOutlineKeyboardDoubleArrowUp />}
                </div>
            </div>
            {
                activePane ? null : <ChatPane />
            }
        </div>
    )
}

export default ChatPanel
