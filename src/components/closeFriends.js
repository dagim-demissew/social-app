import React from 'react'
import '../styles/closeFriends.css'

function CloseFriends({user}) {
  return (
    <div>
        <li className="sidebarFriend">
                <img src = {user.profilePicture} className='sidebarFriendImage' alt="" />
                <span className='sidebarFriendName'>
                 {user.username}
                </span>
            </li>
    </div>
  )
}

export default CloseFriends