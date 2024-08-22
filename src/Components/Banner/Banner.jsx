import React from 'react'
import TravelImg from "../../assets/Images/travelbox.png"
import { MdFlight, MdOutlineHotel } from 'react-icons/md'
import { IoIosWifi } from 'react-icons/io'
import { IoFastFoodSharp } from 'react-icons/io5'


const Banner = () => {
  return (
    <div className='bg-gray-100 min-h-[550px]'>
        <div className="flex justify-center items-center min-h-[550px] backdrop-blur-xl sm:py-0 py-12">
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                    {/* image section */}
                    <div>
                        <img
                        data-aos="flip-up"
                        src={TravelImg} alt='image' className='max-w-[450px] h-[350px] w-full mx-auto
                        drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover'/>
                    </div>

                    {/* text section */}
                    <div>
                        <h1 data-aos="fade-up" className='sm:text-4xl text-3xl font-bold'>
                            Explore all corners of the world with us
                        </h1>
                        <p data-aos="fade-up"
                        className='text-sm text-gray-500 tracking-wide leading-8'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, similique a ullam fugiat et id rem, recusandae earum corporis nulla, facere libero adipisci voluptatibus error iure! Laudantium libero cupiditate a.
                        </p>
                        <div data-aos="zoom-in" className=' grid grid-cols-2 gap-6'>
                            <div className='space-y-6'>
                                <div className="flex items-center gap-4">
                                    <MdFlight className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100'/>
                                    <p>Flight</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MdOutlineHotel className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100'/>
                                    <p>Hotel</p>
                                </div>
                            </div>

                            <div className='space-y-6'>
                                <div className="flex items-center gap-4">
                                    <IoIosWifi className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100'/>
                                    <p>Wi-Fi</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <IoFastFoodSharp className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100'/>
                                    <p>Food</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner