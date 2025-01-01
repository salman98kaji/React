import {useState, useEffect} from 'react'
import service from '../../appwrite/config'
import {Container, PostCard} from '..'
import { useSelector } from 'react-redux'

function AllPost() {
  const [posts, setPosts] = useState([])
  const userid = useSelector((state) => state.auth.userData?.$id)

  useEffect(() => {
    if(userid) {
      service.getPosts(userid).then((res) =>{
        if(res){
          setPosts(res.documents)
        }
      }).catch((error) => {
        console.error("Error fetching posts:", error)
      })
    }
  },[userid])
  

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap justify-center items-center -mx-4 '>
          {posts.map((post) => (
            <div key={post.$id} className='py-6 px-10'>
              <PostCard 
              key={post.$id} 
              $id={post.$id} 
              title={post.title} 
              featuredImage={post.featuredImage} 
            />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPost