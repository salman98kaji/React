import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form' 
import {Button, Input, Logo} from '../components'
import authService from '../appwrite/auth'

function Login() {
    const {register, handleSubmit} = useForm() 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")                 //Clear previous errors: Resets the error state.
        try {
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData){
                    dispatch(authLogin(userData))
                    navigate('/')
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='flex items-center justify-center w-full'>
        <div className={`w-full max-w-lg mx-auto bg-gray-100 rounded-xl p-8 border-black/10`}>
            <div className='mb-4 flex items-center justify-center'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width='100%'/>
                </span> 
            </div>
            <h2 className='text-center text-2xl font-bold'>Sign in to your account</h2>
            <p className='mt-2 text-center text-base text-black/60'>
                Don&apos;t have any account?&nbsp;
                <Link to='/signup' className='font-medium text-primary transition-all duration-200 hover:underline'>
                SignUp
                </Link>
            </p>
            {error && <p className='text-red-500 text-sm mt-8 text-center'>{error}</p>}
            <form onSubmit={handleSubmit(login)} className='mt-8'>
                <div className='space-y-4'>
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
                    {...register('password', {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                    })}
                    />
                    <Button className='w-full' type='submit'>SignIn</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login

//useForm: A library for form handling, providing methods like register and handleSubmit.
//Initializes useForm to manage form inputs and validation.
//Uses useState to manage and display error messages.
//Login functional component-Handles the login process when the form is submitted.
//The login function is an asynchronous function that takes the form data as an argument.
//The function clears the error state before attempting to login.
//The function attempts to login using the authService.login method with the provided email and password.
//If the login is successful, the function retrieves the current user data using the authService.getCurrentUser method.
//If the user data is retrieved successfully, the function dispatches the authLogin action with the user data and navigates to the home page.
//If an error occurs during the login process, the function sets the error state with the error message.
//handleSubmit: A function that validates the form inputs and calls the login function when the form is submitted.
//The react-hook-form library automates form validation and submission handling. In this code, the register function links input fields like "Email" to validation rules, such as being required and matching a valid email pattern. When the form is submitted, the handleSubmit function validates all inputs before executing the login function with the collected data. If validation fails (e.g., invalid email format), the submission halts, and error messages are displayed. This streamlines the process by handling validation and submission logic efficiently without manual checks.
//When the user types in the email field, the register function tracks its value.On form submission:react-hook-form validates that:The field is not empty,The email matches the regex.If validation passes, the login function is invoked with the form data.If validation fails, an error is displayed for the email field.