
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button onClick={logoutHandler}
    className='inline-block px-6 py-2 duration-200 rounded-full hover:bg-blue-100'>Logout
    </button>
  )
}

export default LogoutBtn

//useDispatch is used to dispatch actions to the Redux store, allowing components to interact with the state by triggering updates.
//Imports the authService object or module from a file.This service likely contains methods to handle authentication-related operations (e.g., logging out the user via a backend service).
//Imports the logout action creator from a Redux slice. This action is dispatched to update the Redux store, indicating the user has logged out.
//dispatch is used to send the logout action to the Redux store when the user logs out.
//function logoutHandler encapsulates the logic for logging out the user and dispatching the Redux action.Calls the logout method from the authService.Dispatches the logout action to the Redux store.Updates the global state to reflect that the user has logged out (e.g., clearing the auth state).