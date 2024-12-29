import {useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import './App.css'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  //Manages a local 'loading' state to track whether the app is still determining the current user's authentication status.
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          Your Blogposts<Outlet/>
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
