import React from 'react'

function Container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto p-4 flex justify-center items-center'>{children}</div>
  )
}

export default Container

// The Container component ensures that all content wrapped within it adheres to a consistent layout and spacing pattern. This improves maintainability and eliminates the need to repeat layout-related styles across multiple components.
//The Container component is typically used in web applications to wrap major sections of a page, such as headers, footers, or main content areas, ensuring that they are properly aligned and styled. By using a Container component, developers can easily update the layout of the entire application by modifying a single component, rather than making changes across multiple components.
//The 'children' prop is a special React prop that represents the content nested within the Container component when it is used in JSX.