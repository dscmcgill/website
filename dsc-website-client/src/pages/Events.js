import React from 'react'
import PostMasonry from '../components/PostMasonry'
import newevents from '../assets/events/newevents' 



const featuredConfig = {

    0:{
        gridArea: '1 / 1 / 2 / 3', 
        height : '300px'
    },
    1:{
        height : '300px'
    }, 
    3: {
        height: '630px',
        marginLeft: '30px',
        width: '630px'
    }

}

//merge our style with our post object 
const mergeStyles = function (posts, config){
    posts.forEach((post, index) => 
    {
        post.style = config[index]
        post.author = post.author
        post.description = post.description
    })
}



mergeStyles(newevents, featuredConfig)



export default function Events() {
    return     <main className="event">
    <section className="container home"> 
    <div className = "row-top"> 
        <section className= "featured-posts-container">
        <PostMasonry posts = {newevents} columns= {2} tagsOnTop={true}/>
        </section> 
     </div>
     </section>
    <section className="container home"> 
   
    </section>
        <section className="container home"> 
        <div className = "row"> 
    </div>
    </section>

    
    </main>
    
}
