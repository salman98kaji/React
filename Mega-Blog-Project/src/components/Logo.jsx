import React from 'react'
import logo from '../assets/logo.webp'

function Logo({width = '100px'}) {
  return (
    <div>
      <img src={logo} alt='logo' style={{width}}>
      </img>
    </div>
  )
}

export default Logo

//The Logo component represents a placeholder for your app's branding or logo. This can be extended to display an actual image or SVG. The width prop is used to set the width of the logo. The default width is 100px. The Logo component is a functional component that returns a div element with the text 'Logo'. The width of the div element is set to the value of the width prop. The Logo component is exported as the default export of the file. The Logo component can be used in other components to display the logo of the app. The Logo component can be imported and used in other components as follows: