import React from 'react'
import BlogsComp from '../Components/Blogs/BlogsComp'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { useState } from 'react'
import Popup from '../Components/Popup/Popup.jsx'


const Blogs = () => {

  const [orderPopup,setOrderPopup] = useState(false)
  const handelOrderPopup = ()=> {
    setOrderPopup(!orderPopup)
  }





  return (
    <>
      <div className='min-h-[650px] pt-20 bg-gray-100'>
        <Navbar  handelOrderPopup={handelOrderPopup}/>
        <BlogsComp/>
      </div>
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </>
  )
}

export default Blogs