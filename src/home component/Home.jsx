import React, {useEffect, useState } from 'react'
import axios from 'axios'
import uuid from 'react-uuid'
import Navbar from '../Navbar'
import ChatPanel from './ChatPanel'
import './Home.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const baseURL = "https://newsapi.org/v2/everything?q=web3&apiKey=d8addbb941e94ffca0f7086b6c4e0e2a"

function Home() {

  const [posts, setPosts] = useState([])

  useEffect(()=>{
    axios.get(baseURL).then((res)=>{
      // setPosts(res.data)
      console.log(res.data.articles)
      setPosts(res.data.articles)
      //console.log(posts)
    })
  }, [])

  if(!posts) return null;

  const feeds = posts.map(post => 
    <div key={uuid()} className='feeds'>
      <h3 className='pauthor'>Author: {post.author}</h3>
      <h4 className='ptitle'>Title: {post.title}</h4>
      <p className='pdesc'>Description: {post.description}</p>
    </div>
  )

  return (
    <div className='home'>
      <Navbar className='nav__bar' />
      <h3 className="home">Home</h3>
      <div className='feed-cont'>{feeds}</div>
      <div>In case you don't see any feeds then my product key has expired and if you know where i can fetch crypto news for free then email it to me</div>

      {/* <div className="panecov">
        <ChatPanel className='chat__panel' />
      </div> */}
    </div>
  )
}

export default Home
