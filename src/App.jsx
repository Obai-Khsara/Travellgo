import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import About from "./Pages/About"
import Blogs from "./Pages/Blogs"
import BlogsDetails from "./Pages/BlogsDetails"
import PlacesRoute from "./Pages/PlacesRoute"
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/blogs/:id' element={<BlogsDetails/>}/>
          <Route path='/places' element={<PlacesRoute/>}/>
        </Routes>
    </>
  )
}

export default App