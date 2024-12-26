//
import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props //Spreads additional props like placeholder, value, onChange, etc., for flexibility.
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label className='block mb-1' htmlFor={id}>
                {label}
                </label>
            }
            <input type={type} 
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} 
                ref={ref} 
                {...props} 
                id={id}   //Links the input with its label using the generated ID.
            >  
            </input>
        </div>
    )
})

export default Input

//useId: A React hook for generating a unique, stable ID, useful for accessibility (linking <label> to <input>).
//Defines a functional component Input using React.forwardRef() to forward the ref to the input element.
//React.forwardRef: Enables passing a ref from a parent component to the internal <input> element, useful for imperative actions like focusing the input.
//ref parameter: Accepts a ref object from the parent component to be forwarded to the <input> element.
//Conditionally renders the <label> if the label prop is provided, linking it to the input using the generated ID. htmlFor in <label> matches the id in <input>.