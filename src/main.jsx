import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './game.css'
import Home from "./pages/Home"
import Resources from "./pages/Resources"
import Games from "./pages/Games"

import App from "./App"
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom"

const router=createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "recursos",
    element: <Resources></Resources>
  },
  {
    path: "juegos",
    element: <Games></Games>
  },
  {
    path: "home",
    element: <Home></Home>
  },
  {
    path: "foreveryoung",
    element: <Home></Home>
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />

)
