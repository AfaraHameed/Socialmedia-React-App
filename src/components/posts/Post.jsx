import React from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/friend/friend.jpg" alt="" className="postProfileImg" />
                    <span className="postUserName">afara</span>
                    <span className="postUserName">5mins ago</span>
                   
                </div>
                <div className="postTopRight">
                <MoreVertIcon />
                </div>
            </div>
            
            <div className="postCenter">
          <span className="postText">this is my frst post</span>
          <img className="postImg" src="/assets/friend/friend.jpg" alt="" />
        </div>
            <div className="postBottom">
            <div className="postBottomLeft">
            <ThumbUpIcon className='postBottomIcon'/>
            <ThumbDownIcon className='postBottomIcon'/>
            <span className="postLikeCounter">25 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postBottomComment">comments</span>
          </div>
            </div>
        </div>
    </div>
    
  )
}

export default Post