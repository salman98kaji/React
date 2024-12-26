import {useState, useEffect}from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function Protected({children,authentication = true}) {

    const navigate = useNavigate()  //Used to redirect the user to /login or / based on their authentication status.
    const [loader, setLoader] = useState(true)                  //loader state to show loading screen
    const authStatus = useSelector(state => state.auth.status)  //auth status from redux store

    useEffect(() => { 
        //TODO: make it more easy to understand afterwards

        if(authentication && authStatus !== authentication) {
            navigate('/login')
        } else if(!authentication && authStatus !== authentication) {
            navigate('/')
        }
        setLoader(false)
    },[authStatus, navigate, authentication])

  return (
    loader ? <h1>Loading...</h1> : <>{children}</>
  )
}

//Protected: A higher-order component (HOC) used to restrict or allow access to child components based on authentication status.
//children: The child components that will be rendered if the user is authenticated.Represents the nested content or components wrapped by Protected.
//authentication: A boolean value that determines whether the user should be authenticated to access the child components. Defaults to true.
//useEffect to check the authentication status and redirect the user accordingly.
//if(){}=This condition checks whether the user is trying to access a page that requires authentication but is not authenticated. If true, it redirects the user to the login page. Authentication-A boolean prop that indicates whether the route requires an authenticated user (true means login required).AuthStatus-The current user's authentication status (true for logged-in, false otherwise) from the Redux store.
//If the route requires authentication (authentication === true) AND the user is not authenticated (authStatus !== true), the condition evaluates to true.This triggers navigate('/login'), redirecting the user to the login page.
//else if(){}this condition checks whether the user is trying to access a page that does not require authentication but is authenticated. If true, it redirects the user to the home page. If the user is logged in (authStatus === true) but they are trying to access a page that doesn’t require authentication (authentication === false), the condition evaluates to true.This triggers navigate('/'), redirecting the user to the home page.