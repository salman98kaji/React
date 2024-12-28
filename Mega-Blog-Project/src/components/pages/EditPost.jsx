import React from 'react'
import {Container, PostForm} from '../components'   
import service from '../../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPost] = React.useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    React.useEffect(() => {
        if(slug){
            service.getPost(slug).then((post) => {
                if(post){
                    setPost(post)
                } else {
                    navigate('/404')
                }
            })
        }
    }, [slug, navigate])

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
  
}

export default EditPost