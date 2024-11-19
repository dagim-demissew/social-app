import React from 'react'
import '../styles/profile.css'
import Sidebar from '../components/Sidebar'
import Rightbar from '../components/Rightbar'
import Topbar from '../components/Topbar'
import Feed from '../components/feed'
function Profile() {
  return (
    <>
      <Topbar/>
    <div className="profile">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop"> 
          <div className="profileCover">
            <img className='ProfileCoverImage' src="/assets/post/3.jpeg" alt="" />
            <img className='ProfileUserImage' src="/assets/person/1.jpeg" alt="" />
          </div>
          <div className="profileInfo">
            <h4 className='profileInfoName'>
              heelo
            </h4>
            <span className="profileDescription">this is dagim project</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed/>
          <Rightbar Profile/>
        </div>
      </div>
    </div>
  </>
  )
}

export default Profile