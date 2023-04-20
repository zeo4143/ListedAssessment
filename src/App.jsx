import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignIn from './Pages/SignIn'
import Admin from './Pages/Admin'
import Dashboard from './Components/Dashboard'
import './App.css'

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn/>
    },
    {
      path: "/Admin",
      element: <Admin/>,
      children: [
        {
          path: ":Dashboard",
          element: <Dashboard/>
        },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
