import React from 'react'
import { categoryColors } from './styles'


export default function TagRow ({tags}){
    return(
    <div className="tags-container">
        {tags.map((tag, ind) => 
           <span key={ind} className="tag" style={{backgroundColor: categoryColors[tag], borderRadius: 5, padding: 3,marginRight: 5}}>
               {tag}
           </span>  )}
    </div>
    )
}