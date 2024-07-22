import React from 'react'
import ellipsis from "../Icons/ellipsis.png";
import bookmark from "../Icons/bookmark.png";
import heart from "../Icons/heart.png";
import send from "../Icons/send.png";
import chat from "../Icons/chat.png";
import Image from "next/image"

function FeedCard({ avatar, username, location, likes, content, description, commentCount }) {
  return (
    <div className='feed-card'>
        <div className="card-header">
            <div className="two-column-grid bias-left">
                <div className="two-column-grid bias-right">
                    <div className="avatar-container">
                        <Image src={avatar} height={100} width={100} alt="" />
                    </div>
                    <div>
                        <div className="username">{username}</div>
                        <div className="user-details">{location}</div>
                    </div>
                </div>

                <div className="icon more">
                    <Image src={ellipsis} alt="" />
                </div>
            </div>
        </div>
        <div className="card-body">
            <Image src={content} height={600} width={600}/>
        </div>
        <div className="card-footer">
            <div className="action-row">
                <Image src={heart}/>
                <Image className='flip-z' src={chat}/>
                <Image src={send}/>
                <div className='justify-end'>
                    <Image src={bookmark}/> 
                </div>
            </div>

            <div className="likes">
                {likes} likes
            </div>

            <div className="description">
                <span className="username">{username}</span>
                <span>{description}</span>
            </div>

            <div className="view-comments">
                View all {commentCount} comments
            </div>
        </div>
    </div>
  )
}

export default FeedCard