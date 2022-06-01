import React from 'react'
import { useState } from 'react'
import '../styles/post.css'

function Post() {
    
    const[data, setData] = useState({
        author: "",
        content: ""
    })
    
    function onChange(event) {
        event.preventDefault();
        const newData = {...data}
        newData[event.target.id] = event.target.value
        setData(newData)
    }
    
    function submit(event) {
        event.preventDefault();
        console.log(data)
    }

    return <>
        <div className='container-post post'>
            <div className='callout secondary'>
                <h4 className='leave-comment'>
                    Add a post
                </h4>
                <form onSubmit={(event)=> submit(event)} className='post-edit'>
                    <label>Author</label>
                    <input onChange={(event) => onChange(event)} id="author" value={data.author} placeholder='AUTHOR' type='text'/>
                    <label>Content</label>
                    <input onChange={(event) => onChange(event)} id="content" value={data.content} placeholder='CONTENT' type='text'/>
                    <button>Add comment</button>
                </form>
                <div>
                    {/*{this.renderPost()}*/}
                </div>
            </div>
        </div>
    </>
}

export default Post;