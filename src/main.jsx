import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import ErrorPage from './ErrorPage.jsx'
import Contact from './routes/Contact.jsx'
import { Children } from 'react'

// Creating the Browser Router
const router = createBrowserRouter([
  {
    //Root route
    path: "/",
    element : <App/>,
    errorElement : <ErrorPage/>,
    // Nested routes 
    children: [{
      path: "contacts/:contactId",
      element: <Contact/>
    }]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
