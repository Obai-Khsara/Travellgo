import React from 'react'
import { useLocation } from 'react-router-dom'
import BlogsComp from '../Components/Blogs/BlogsComp'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const BlogsDetails = () => {

  const location = useLocation()
  const {image, date, title, description, author} = location.state


  return (
    <>
      <Navbar/>
      <div className='min-h-[550px] pt-20'>
        <div className='h-[350px] overflow-hidden'>
          <img src={image} alt={title} className='h-[300px] w-full object-cover mx-auto transition duration-700
          hover:scale-110'/>
        </div>

        <div className='container pb-14'>
          <p className='text-sm py-3 text-slate-600'>
            Written by {author} on date {date}
          </p>
          <h1 className='font-semibold text-2xl mb-10'>{title}</h1>
          <p>
            {description}
          </p>
        </div>

        <BlogsComp/>
      </div>
      <Footer/>
    </>
  )
}

export default BlogsDetails