import {useState} from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import {Button, Input, Logo} from '../components'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

function SignUp() {
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch()
    const naviagte = useNavigate()
    const [error, setError] = useState("")

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if(userData) {
                const userData = await authService.getCurrentUser()
                if(userData){
                    dispatch(login(userData))
                    naviagte('/')
                }
            }
        } catch (error) {
            setError(error.message)   
        }
    } 
  return (
    <div className='flex items-center justify-center'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        </div>
        <div className='mb-4 flex items-center justify-center'>
            <span className='inline-block w-full max-w-[100px]'>
                <Logo width='100%'/>
            </span>
        </div>
        <h2 className='text-center text-2xl font-bold leading-tight'>Sign Up to create an accout</h2>
        <p>
            Already have an account?&nbsp;
            <Link to='/login'
            className='font-medium text-primary transition-all duration-200 hover:underline'>Sign In
            </Link>
        </p>
        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(create)}>
            <div className='space-y-4 mt-8'>
                <Input
                label='name'
                placeholder='Enter your full name'
                {...register('name', {
                    required: true,
                    minLength: 3
                })}
                />
                <Input 
                label='Email'
                type='email'
                placeholder='Enter your email'
                {...register('email', {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Invalid email address'
                    }
                })}
                />
                <Input
                label='Password'
                type='password'
                placeholder='Enter your password'
                {...register('pasword',{
                    required: true,
                    minLength: 6,
                    maxLength: 20
                })}
                />
                <Button className='w-full' type='submit'>
                    Create Account
                </Button>
            </div>
        </form>
    </div>
  )
}

export default SignUp

//Once a user signs up and their account is successfully created, they are automatically logged in. This eliminates the need for them to manually log in after signing up, providing a smoother and more user-friendly experience. The user's information is then stored in the Redux store using the login action from the authSlice. The user is then redirected to the home page using the useNavigate hook from react-router-dom. If there is an error during the sign-up process, the error message is displayed to the user. The form is validated using the react-hook-form library, ensuring that the user enters the required information in the correct format. The form data is then submitted to the create function, which creates the user account using the createAccount method from the authService. If the account is successfully created, the user is automatically logged in, and their information is stored in the Redux store.