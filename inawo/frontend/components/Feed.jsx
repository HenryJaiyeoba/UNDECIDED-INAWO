import React from "react";
import "../styles/Feed.css";
import FeedCard from "./FeedCard";
// import avatarLogo from "avatar.png";

const data = [
  { 
    avatar: "/avatar.png", 
    username: "Kelly", 
    location: "California", 
    likes: "2345",
    content: "/avatar.png",
    description: "My current photoshoot with Bryan",
    commentCount: 565
  },
  { 
    avatar: "/avatar.png", 
    username: "Kelly", 
    location: "California", 
    likes: "2345",
    content: "/avatar.png",
    description: "My current photoshoot with Bryan",
    commentCount: 565
  }
]
function Feed() {
  return (
  <div className="feed">
    <div className="feed-bubble-row-container">
      <div className="feed-bubble-row-header">
        <h3>For You</h3>
        <h3>Following</h3>
      </div>
      
    </div>
    { data.map( cardData =>     
      <FeedCard 
      avatar = {cardData.avatar}
      username = {cardData.username}
      location= {cardData.location}
      likes={cardData.likes}
      content={cardData.content}
      description={cardData.description}
      commentCount={cardData.commentCount}/>
    )}
  </div>
  )
}

export default Feed;
