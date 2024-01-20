import React from 'react'
import ethhub_logo from "./assets/ethhub.png"
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { IoIosLogOut } from "react-icons/io";
import { VscDebugDisconnect } from "react-icons/vsc";
import { IoHomeOutline, IoChatboxEllipsesOutline, IoWalletOutline, IoNotifications } from "react-icons/io5";


function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <div className='navigate'>
      <header className="nav_header">
        <img src={ethhub_logo} alt="applogo" className="ethlogo" />
        <nav>
          <ul className="nav_links">
            <li className='links'>
              <Link to="/home"><IoHomeOutline /> Home</Link>
            </li>
            <li className='links'>
              <Link to="/chat"><IoChatboxEllipsesOutline /> Chats</Link>
            </li>
            {/* <li className='links'>
              <Link to="/notifications"><IoNotifications /> Notifications</Link>
            </li> */}
            <li className='links'><Link to="/wallet"><IoWalletOutline /> Wallet</Link></li>
          </ul>
        </nav>
        <div className="optout">
          {/* <button className="cta"><VscDebugDisconnect />disconnect</button> */}
          <button className="cta" onClick={handleLogout}><IoIosLogOut />Logout</button>
        </div>
      </header>
    </div>
  )
}

export default Navbar
