import React from 'react'
import { useState } from 'react'
import Navbar from "../Components/Navbar/Navbar.jsx"
import Footer from '../Components/Footer/Footer.jsx'
import Home from './Home.jsx'
import Popup from '../Components/Popup/Popup.jsx'


const Layout = () => {

  const [orderPopup,setOrderPopup] = useState(false)
  const handelOrderPopup = ()=> {
    setOrderPopup(!orderPopup)
  }


  return (
    <>
        <Navbar handelOrderPopup={handelOrderPopup}/>
        <Home/>
        <Footer/>
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </>
  )
}

export default Layout