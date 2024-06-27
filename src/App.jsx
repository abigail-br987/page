import Home from "./pages/Home"
import Resources from "./pages/Resources"
import Games from "./pages/Games"
import { BrowserRouter } from "react-router-dom"
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom"

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />} />
          <Route path="/home" element= {<Home />} />
          <Route path="/resources" element= {<Resources />} />
          <Route path="/juegos" element= {<Games />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App

/* 

import List from "./List.jsx"

function App() {
  return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App 
*/