import React, { useState } from 'react'
import MainVid from "../assets/Images/video/main.mp4"
import Hero from '../Components/Hero/Hero'
import Places from '../Components/Places/Places'
import BannerImg from '../Components/BannerImg/BannerImg'
import Poster from "../assets/Images/travelCover.jpg"
import Banner2 from "../assets/Images/travel-cover-2.jpg"
import Banner from '../Components/Banner/Banner'
import Testimonial from '../Components/Testimonial/Testimonial'
import BlogsComp from '../Components/Blogs/BlogsComp'
import Popup from '../Components/Popup/Popup'


const Home = () => {


  const [orderPopup,setOrderPopup] = useState(false)
  const handelOrderPopup = ()=> {
    setOrderPopup(!orderPopup)
  }


  return (
    <>
      <div>
        <div className='relative h-[700px]'>
          <video muted loop autoPlay className='absolute top-0 right-0 h-[700px] w-full object-cover z-[-1]'>
            <source src={MainVid} type='video/mp4'/>
          </video>
          <Hero/>
        </div>
        <Places handelOrderPopup={handelOrderPopup}/>
        <BannerImg img={Poster}/>
        <BlogsComp/>
        <Banner/>
        <BannerImg img={Banner2}/>
        <Testimonial/>
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
      </div>
    </>
  )
}

export default Home