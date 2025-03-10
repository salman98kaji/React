import React from 'react'
import service from '../../appwrite/config'
import Container from '../container/Container'
import PostCard from '../PostCard'
import { useSelector } from 'react-redux'

function Home() {

    const isAuthenticated = useSelector((state) => state.auth.status)
    const userid = useSelector((state) => state.auth.userData?.$id)
    const [loading, setLoading] = React.useState(true)
    const [posts, setPosts] = React.useState([])

    React.useEffect(() => {
        
        if(isAuthenticated && userid) {
            service.getPosts(userid).then((post) => {
                
                if(post && post.documents && post.documents.length > 0){
                    setPosts(post.documents)
                }
            })
            .finally(() => setLoading(false));
        } else {
            setPosts([]); //Clear posts if user is not authenticated
            setLoading(false)
        }
    }, [isAuthenticated, userid])

    if (loading) {
        return <div className="text-center">Loading posts...</div>;
    }
    
    if (!isAuthenticated) {
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
        ); 
    }

    if (isAuthenticated && posts.length === 0) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='w-full p-2'>
                            <h2 className='text-2xl font-bold hover:text-gray-500'>
                                You have no posts ! Please create a post to see.
                            </h2>
                        </div>
                    </div>
                </Container>
            </div>
        ); 
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
    ); 
}

export default Home