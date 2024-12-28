import React from 'react'
import service from '../../appwrite/config'
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = React.useState([])
    React.useEffect(() => {
        service.getPosts().then((post) => {
            if(post) {
                setPosts(post.documents)
            }
        })
    }, [])
    
    if(posts.length === 0) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='w-full p-2'>
                            <h2 className='text-2xl font-bold hover:text-gray-500'>
                                Login to read posts
                            </h2>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8 mt-4'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='w-1/4 p-2'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
 
}

export default Home