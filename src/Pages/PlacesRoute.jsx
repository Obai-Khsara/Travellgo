import React from 'react'
import Places from '../Components/Places/Places'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { useState } from 'react'
import Popup from '../Components/Popup/Popup.jsx'



const PlacesRoute = () => {


  const [orderPopup,setOrderPopup] = useState(false)
  const handelOrderPopup = ()=> {
    setOrderPopup(!orderPopup)
  }

  return (
    <div className='pt-14'>
      <Navbar  handelOrderPopup={handelOrderPopup}/>
      <Places  handelOrderPopup={handelOrderPopup}/>
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
  )
}

export default PlacesRoute