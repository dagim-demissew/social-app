import React from 'react'
import '../styles/Topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'
import {Link} from 'react-router-dom'


function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className='logo'> Dagim Project3</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search className='searchIcon'/>
                <input className='searchInput' placeholder='Feel Free To Search' type="text" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">HomePage</span>
                <span className="topbarLink">TimeLine</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Link className='topbarroute' to={'/'}><Person/></Link>
                    <span className="topbarIconBadge">
                         1
                    </span>
                </div>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Chat/>
                    <span className="topbarIconBadge">
                         1
                    </span>
                </div>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Notifications/>
                    <span className="topbarIconBadge">
                         2
                    </span>
                </div>
            </div>
            <Link to={'/profile'}>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
            </Link>
            
            
        </div>
    </div>
  )
}

export default Topbar