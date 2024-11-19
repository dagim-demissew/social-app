import React from 'react'
import '../styles/Share.css'
import {PermMedia, Label, Room, EmojiEmotions} from '@mui/icons-material'

function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImage' src="../assets/person/1.jpeg" alt="" />
                <input placeholder='Whats on your mind?' className='shareInput' name="" id="" />
            </div>
            <hr className='shareHr'/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia className='shareIcon' htmlColor='tomato'/>
                        <span className='shareOptionText'>photo/video</span>
                    </div>
                    <div className="shareOption">
                        <Label className='shareIcon' htmlColor='blue'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room className='shareIcon' htmlColor='green'/>
                        <span className='shareOptionText'> Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions className='shareIcon' htmlColor='goldenrod'/>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className="shareButton">
                    Share
                </button>
            </div>
        </div>
    </div>
  )
}

export default Share