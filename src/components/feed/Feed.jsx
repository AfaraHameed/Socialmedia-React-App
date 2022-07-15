import React from 'react'
import Post from '../posts/Post'
import Share from '../share/Share'

function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
      <Share/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      </div>
    </div>
  )
}

export default Feed