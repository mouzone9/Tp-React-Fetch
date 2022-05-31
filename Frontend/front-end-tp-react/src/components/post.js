import React from 'react'
import '../styles/post.css'

function Post() {
    return (
        <div className='callout secondary'>
            <h4 className='leave-comment'>
                Add a post
            </h4>
            <form className='post-edit'>
                <input placeholder='AUTHOR' type='text'/>
                <textarea placeholder='add your comments'></textarea>
                <button>Add comment</button>
            </form>
        </div>
    )
}

export default Post;