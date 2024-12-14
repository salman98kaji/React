# React + Vite

The Context API in React is a built-in feature that allows you to share data across your application without having to pass props manually through multiple levels of the component tree. It simplifies state management for global or shared data like user authentication, themes, language settings, etc.

How Context API Works
The Context API revolves around three main components:---
React.createContext: Creates a context object.
Provider: A component that wraps the part of your application where the context value is accessible.
Consumer: A component or a hook (useContext) that accesses the context value

Why Use Context API?
Avoid Prop Drilling: Simplifies passing data deep into the component tree.
Global State Management: Ideal for scenarios like authentication, themes, or shared configurations.
Integration with Other Tools: Works well with libraries like react-router-dom for sharing routing information or Redux for complex state management.