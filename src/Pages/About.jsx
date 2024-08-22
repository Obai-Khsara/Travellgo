import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Location from '../Components/Location/Location'
import { useState } from 'react'
import Popup from '../Components/Popup/Popup.jsx'

const About = () => {

  const [orderPopup,setOrderPopup] = useState(false)
  const handelOrderPopup = ()=> {
    setOrderPopup(!orderPopup)
  }



  return (
    <>
      <div className='container pt-14'>
        <Navbar  handelOrderPopup={handelOrderPopup}/>

        <div className='py-10'>
          <h1 className='border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold my-8'>
            About us
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magni error odio deleniti nihil possimus minus repellendus iste ab iure aliquid omnis tempora dolorum labore nobis culpa similique consequuntur, nulla cumque laudantium qui id debitis! Doloribus libero magnam earum aliquid assumenda quidem, totam magni voluptates molestiae velit obcaecati cumque modi, molestias corrupti cupiditate mollitia iure? Ipsum et eligendi ullam quaerat!
          </p>
          <br/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia praesentium vitae itaque. Eius quasi earum sequi eligendi doloribus cupiditate omnis magni rem, laudantium temporibus, doloremque reprehenderit vero, alias vel harum? Excepturi laborum pariatur exercitationem, ex veniam magnam minima totam aut.
          </p>
        </div>

        <Location/>
        
      </div>
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </>
    
  )
}

export default About