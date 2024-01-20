import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import './App.css';
import Auth from './auth component/Auth';
import Authenticate from './auth component/Authenticate';
import Home from './home component/Home';
import Chat from './chat component/Chat';
import Wallet from './wallet component/Wallet';


import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

// 1. Get projectId
const projectId = "cdbf2b7f4b414c9646cd74c71efbe28c"
if(!projectId){
  throw new Error("Please provide a project ID")
}

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

// 3. Create modal
const metadata = {
  name: 'EthHub',
  description: 'A decentralized social media application',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/']
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId
})


const App = () => {

  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Auth />} />
            <Route path="home" element={<Home />} />
            <Route path="chat" element={<Chat />} />
            <Route path="wallet" element={<Wallet />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;