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
        <div className='flex flex-wrap -mx-4'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPost