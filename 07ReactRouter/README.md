# React + Vite

React Router DOM is a popular library for handling routing in react applications. It allows developers to build single page applications (SPA) with dynsmic navigation, where users can move between different views and pages without full page reload.

The <RouterProvider /> is a key component in React Router (starting from React Router v6.4) that acts as the entry point for integrating the router into your application. It manages routing configurations, navigation, and rendering the appropriate components based on the URL.

'createBrowserRouter' creates a router instance that we can pass to <RouterProvider> component to enable routing. The router is configured with a list of route objects.

The <Route/> component in the React Router DOM helps in mapping between URL paths and the component that should render for that path. <Routes/> acts as a container for all <Route/> components.

The <header> element is an HTML semantic tag used to represent introductory content or a set of navigational links for a document or a section.It typically contains: The main title of the page. Logos, branding elements. Navigation bars, search bars, or other introductory elements.

The <nav> element is another HTML semantic tag used to define a block of navigational links.

The <Link> component comes from the React Router library and is used for navigating between pages in a React application without refreshing the page. It replaces the traditional <a> tag for internal routing. 'to' Prop: Specifies the path to navigate to (e.g., /home).

<NavLink> :Similar to <Link>, but specifically designed for navigation links that need to indicate whether they are "active" (i.e., the current route matches the link).

<ul> Element is a container for navigation menu.

<Outlet/> component is provided by React Router DOM that acts as a placeholder for rendering child routes inside a parent route's component. It dynamically renders the component of the currently matched child route.

The useLoaderData() hook is a React Router hook that allows you to access data that was fetched by a route loader. Loaders are functions associated with specific routes, and they run before the route component is rendered. This enables you to fetch data on a per-route basis and ensures the data is available when the component renders.