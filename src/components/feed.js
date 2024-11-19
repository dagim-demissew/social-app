import React from 'react'
import '../styles/Feed.css'
import Share from './Share'
import Post from './post'
import {Posts} from '../dummydata'

function Feed() {
  return (
    <div className='feed'>
        <div className="feedWrapper">
            <Share/>
            {Posts.map(p => (
              <Post key={p.id} post={p}/>
            ))}
        </div>
        </div>
  )
}

export default Feed