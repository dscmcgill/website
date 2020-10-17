import React from 'react'
import MasonryPost from './MansoryPost'

export default function PostMasonry({posts, columns, tagsOnTop}){
    return(
        <section className="masonry" style={{gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))`}}>

        {posts.map((post, index) =>
            //how to pass props to our component
            <MasonryPost {...{post, index, tagsOnTop, key: index}} />
            )}
            
        </section>
    )
}