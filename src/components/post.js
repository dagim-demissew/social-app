import React from 'react'
import '../styles/post.css'
import { MoreVert, Heart, Like } from '@mui/icons-material'
import {Users} from '../dummydata'
import { useState } from 'react'


function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)


    const likeHandler = ()=>{
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImage" />
                    <span className='postUserName'>{Users.filter((u) => u.id === post.userId)[0].username}</span>
                    <span className='postDate'>{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
                
            </div>
            <div className="postCenter">
                <span className="postText">
                    {post.desc}
                </span>
                <img className='postImage' src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className = 'likeIcon' src="/assets/like.png" onClick={likeHandler} alt="" />
                    <img className = 'likeIcon' src="/assets/heart.png" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} people like this post</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText"> {post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post