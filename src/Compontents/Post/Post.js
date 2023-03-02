import React from 'react'
import './Post.css'

const Post = (props) => {
    return (
        <a rel="noreferrer" href={props.canonical_url} className='post' id={props.id} target="_blank">
            <div>
                <h2 className='post-title'>{props.title}</h2>
                <p className='post-author'><strong>{props.copyright ? props.copyright : 'Author'} - {new Date(props.date).toLocaleDateString("en-US")}</strong></p>
                <img className='picture' src={props.hdurl} alt="Image provided by Tech Crunch" />
                <p className='post-desc'>{props.explanation}</p>
            </div>
        </a>
    )
}

export default Post
