import React from 'react'
import {Outlet, Link} from "react-router-dom"
// Link allows client side rendering. App can update url without requesting another page from the server

const App = () => {
  return (
    <>
      <h1>Root route</h1>
      {/* Outlet tells the root route where to render its children routes */}
      <nav>
        <ul>
          <li><Link to={`contacts/2`}>Sammy boi</Link></li>
          <li><Link to={`contacts/3`}>Wasabi</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </>
  )
}

export default App