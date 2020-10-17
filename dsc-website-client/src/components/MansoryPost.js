import React from 'react';
import TagRow from './tag-row'


export default function MasonryPost ({post, tagsOnTop}) {

    const windowWidth = window.innerWidth

    const imageBackground = {backgroundImage:  `url("${require(`../images/${post.image}`)}")`};

    const style = windowWidth > 800 ? {...imageBackground, ...post.style} : imageBackground
 
    return (   <a className="masonry-post overlay" style ={style}>
            <div className="image-text" style ={{justifyContent:tagsOnTop ? 'space-between' : 'flex-end'}}>
                <TagRow tags={post.categories} />
                <div>
                    <h2 className="image-title" > {post.title}</h2>
                    <span className = "image-date">{post.date}</span>
                </div>
            </div>
        </a> 
    )
}