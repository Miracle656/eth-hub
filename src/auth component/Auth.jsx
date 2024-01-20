import React, { useState, useEffect } from 'react'
import "./Auth.css"
import mini_logo from "../assets/ethub.png"
import max_logo from "../assets/ethub.png"
import santa from "../assets/santa.png"
import { PiArrowFatLinesLeftBold, PiPlugsConnected } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { auth } from '../../firebase';
import { IoEarthOutline } from "react-icons/io5";
import Avatar from './Avatar';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import gbtn from '../assets/gbtn.png'
import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers5/react'

function Auth() {
    const navigate = useNavigate();

    const [connect, setConnect] = useState(false);
    const { address, chainId, isConnected } = useWeb3ModalAccount()

    const { open } = useWeb3Modal()

    const walletconnect = () => {
        open()
        setConnect(!connect)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/home');
            } else {
                console.log("user not signed in");
            }
        })
    })

    const provider = new GoogleAuthProvider();

    const googlelogin = () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                navigate('/home')
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='authcomp'>
            <header className='header_connect'>
                <img className='mini_logo' src={mini_logo} alt="applogo" />
                <nav className="wallet">
                    <ul>
                        <li>
                             <button className="connect" onClick={walletconnect}>
                                <PiPlugsConnected />
                                {isConnected ? `${address.slice(0,10)}...` : "connect"}
                            </button> 
                        </li>
                    </ul>
                </nav>
            </header>
            <img className='max_logo' src={max_logo} alt="applogo" />
            <main>
                <div className="container">
                    <div>
                        <Avatar />
                        {/* <img src={santa} alt="santa" className="santa" /> */}
                        <h2 className="appname">EthHub</h2>
                        <p className='whylog'>Login to access the Decentralized World <IoEarthOutline /></p>
                        {/* <div className="inputfield">
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="c_t_a">
                            <button className="login"><AiOutlineLogin className='logicon' /> Login</button>
                        </div> */}
                        <div className='google_button'>
                            <button
                                onMouseOver={() => {
                                    isConnected ? "" : alert("Ensure Wallet is connected")
                                }}
                                style={{
                                    filter: isConnected ? "blur(0px)" : 'blur(2px)',
                                    cursor: isConnected ? "pointer" : 'not-allowed'
                                }}
                                className='gbtn'
                                onClick={googlelogin}
                                disabled={isConnected ? false : true}> <img src={gbtn} alt="gbtn" /> <p>Continue with Google</p> </button>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <div className='foot_cta'>
                    <p>
                        Connect your Wallet and Continue with Google to access the Decentalized World <IoEarthOutline />
                        Copyright © 2024 CodeSurgeon
                    </p>
                    {/* <Link to='/signup' className="signup"><CiLogin className='suicon' /> Signup</Link> */}
                </div>
            </footer>
        </div>
    )
}

export default Auth
