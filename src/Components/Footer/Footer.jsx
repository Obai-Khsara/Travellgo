import React from 'react'
import FooterLogo from "../../assets/Images/logo.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
import NatureVid from "../../assets/Images/video/footer.mp4"
import { Link } from 'react-router-dom'



const FooterLinks = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Best Places",
    link: "/places"
  },
  {
    title: "Blogs",
    link: "/blogs"
  }
]


const Footer = () => {
  return (
    <div className='py-10 relative overflow-hidden'>
      <video
      autoPlay loop muted className='absolute top-0 right-0 h-full w-full overflow-hidden object-cover z-[-1]'>
        <source src={NatureVid} type='video/mp4'/>
      </video>

      <div className="container">
        <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
          
          <div className='py-8 px-4'>
            <h1 className='flex items-center gap-3 text-xl sm:text-3xl font-bold sm:text-left text-justify'>
              <img src={FooterLogo} alt='logoImage' className='max-h-[60px]'/>
            </h1>

            <p className='text-sm'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, quisquam, quis consequatur fuga quam doloribus amet soluta magnam in error consectetur iusto numquam officiis excepturi, ratione autem debitis recusandae ab?
            </p>
            <br/>
            <div className='flex items-center gap-3 mt-3'>
              <FaLocationArrow/>
              <p>Noida, Uttar Predsh</p>
            </div>
            <div className='flex items-center gap-3 mt-3'>
              <FaMobileAlt/>
              <p>+961 76734779</p>
            </div>
            <div>
              <div className='flex gap-3 mt-6 items-center'>
                <a href='#'>
                  <FaInstagram className='text-3xl'/>
                </a>
                <a href='#'>
                  <FaFacebook className='text-3xl'/>
                </a>
                <a href='#'>
                  <FaLinkedin className='text-3xl'/>
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">

            {/* first col */}
            <div>
              <div className="py-8 px-4">
                <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
                <ul className='flex flex-col gap-3'>
                  {
                    FooterLinks.map(({title,link})=>{
                      return(
                        <li key={link}
                        className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700'>
                          <Link
                          >
                            <span>&#11162;</span>
                            <span>{title}</span>
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>

            {/* second col */}
            <div>
              <div className="py-8 px-4">
                <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
                <ul className='flex flex-col gap-3'>
                  {
                    FooterLinks.map(({title,link})=>{
                      return(
                        <li key={link}
                        className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700'>
                          <Link
                          >
                            <span>&#11162;</span>
                            <span>{title}</span>
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>

            {/* third col */}
            <div>
              <div className="py-8 px-4">
                <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
                <ul className='flex flex-col gap-3'>
                  {
                    FooterLinks.map(({title,link})=>{
                      return(
                        <li key={link}
                        className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700'>
                          <Link
                          >
                            <span>&#11162;</span>
                            <span>{title}</span>
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>

          </div>

        </div>

        {/* copy right section */}
        <div>
          <div className='text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white'>
            @ copyright 2024 All rights reserved.
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer