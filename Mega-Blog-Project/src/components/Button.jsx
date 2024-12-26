// This component is a reusable button component that can be used throughout the application.

function Button({//Accepts props to modify styles and text of the button.
    children,  //This is the text that will be displayed on the button.
    type = 'button',
    bgColor = 'bg-blue-500',
    textColor = 'text-white',
    className = '',
    ...props  //Spreads additional props like onClick, disabled, id, etc., for flexibility.
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props}>
      {children}
    </button>
  )
}

export default Button
