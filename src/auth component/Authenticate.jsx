import React from 'react'
import './Auth.css'
import mini_logo from "../assets/chaticon.ico"
import max_logo from "../assets/chaticon.png"
import { PiPlugsConnected } from "react-icons/pi";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

function Authenticate() {
  return (
    <div className='authcomp'>
            <header className='header_connect'>
                <img className='mini_logo' src={mini_logo} alt="applogo" />
                <nav className="wallet">
                    <ul>
                        <li>
                            <Link to="/home">
                                <button className="connect">
                                    <PiPlugsConnected />connect
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <div className="container">
                    <div>
                        <CgProfile className='prof_large' />
                        <h2 className="appname">EthHub<img className='max_logo' src={max_logo} alt="applogo" /></h2>
                        <p className='whylog'>Login to access the Decentralized World 🌍</p>
                        <div className="inputfield">
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="c_t_a">
                            <button className="login"><AiOutlineLogin className='logicon' /> Signup</button>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <div className='foot_cta'>
                    <p>
                        Already have an account? Your friends await
                    </p>
                    <Link to='/' className="signup"><CiLogin className='suicon' /> Login</Link>
                </div>
            </footer>
        </div>
  )
}

export default Authenticate
