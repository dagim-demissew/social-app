import React from 'react'
import Sidebar from '../components/Sidebar'
import Rightbar from '../components/Rightbar'
import Topbar from '../components/Topbar'
import '../styles/Home.css'
import Feed from '../components/feed'



function Home() {
  return (
    <>
        <Topbar/>
      <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
    </>
  )
}

export default Home