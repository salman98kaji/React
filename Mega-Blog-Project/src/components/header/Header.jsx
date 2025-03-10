
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: authStatus //if the user is authenticated, the home item is displayed
    },
    
    {
      name:'Login',
      slug: '/login',
      active: !authStatus //if the user is not authenticated, the login item is displayed
    },
    {
      name: 'SignUp',
      slug: '/signup',
      active: !authStatus //if the user is not authenticated, the signup item is displayed
    },
    {
      name: 'All-Posts',
      slug: '/all-posts',
      active: authStatus //if the user is authenticated, the all-posts item is displayed
    },
    {
      name: 'Add-Post',
      slug: '/add-post',
      active: authStatus //if the user is authenticated, the add-post item is displayed
    },
    
  ]

  return (
    <header className='py-4 bg-blue-500 shadow-lg'>
      <Container>

        {/* navigation bar */}
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='80px'/>
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li className='px-1' key={item.name}>
                <button onClick={() => navigate(item.slug) } className='bg-red-400 inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li className='px-1'>
              <LogoutBtn/>
            </li>
          )}
          </ul>
            
        </nav>
      </Container>
        
    </header>
  )
}

export default Header

//Uses useSelector to access the auth.status from the Redux store. authStatus is a boolean that indicates whether the user is authenticated.Uses useSelector to conditionally render items based on global state (authStatus).
//Initializes the navigate function, which is used later for programmatic navigation to different routes when buttons are clicked.
//<Container> component is used to wrap the header content and apply padding to the content.
//nav element with flex to create a flexible box layout for the navigation items.
//Link- Wraps the logo with a Link to navigate to the home page when the logo is clicked.
//Iterates over navItems and renders a <li> for each item where active is true. The item name is displayed as a button, and clicking the button navigates to the corresponding route.
//If authStatus is true (user is logged in), renders a LogoutBtn inside a <li>. The LogoutBtn component is used to log out the user.