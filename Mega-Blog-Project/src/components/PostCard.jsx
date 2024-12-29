import React from 'react'
import service from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`} >
        <div className='w-full bg-white rounded-lg p-4 shadow-md'>  
            <div className='w-full justify-center mb-4'>
                <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-lg'/>
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard

//This component is used to display a post card with the title and featured image of the post. The post card is a clickable link that redirects the user to the post details page.
//The PostCard component receives the following props:
// $id: unique identifier for the post
// title: title of the post
// featuredImage: ID of the featured image of the post
//Wraps the card inside a Link component for navigation. Clicking the card redirects the user to the post detail page using the post's $id
//Uses service.getFilePreview to fetch the preview URL of the featuredImage from Appwrite.