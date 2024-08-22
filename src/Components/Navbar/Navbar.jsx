import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoImg from "../../assets/Images/logo.png"
import { FaCaretDown } from 'react-icons/fa'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'





const dropdownLinks = [
  {
    name: "Our Services",
    link: "/#services"
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands"
  },
  {
    name: "Location",
    link: "/#location"
  }
]



const Navbar = ({handelOrderPopup}) => {

  const [showMenu , setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <div className='fixed top-0 right-0 w-full text-black bg-white shadow-md z-[999]'>
        <div className=' bg-gradient-to-r from-primary to-secondary text-white'>
          <div className="container py-[2px] sm:block hidden">
            <div className="flex justify-between">
              <p>20% off on next booking</p>
              <p>Mobile No. +961 76734997</p>
            </div>
          </div>
        </div>

        <div className="container sm:py-0 py-3">
          <div className='flex justify-between items-center'>
            {/* Logo */}
            <div>
              <Link to="/">
                <img src={LogoImg} alt='logo-image' className='h-16'/>
              </Link>
            </div>

            {/* Links */}
            <div className='hidden md:block'>
              <ul className='flex items-center gap-6'>
                <li className='py-4'>
                  <NavLink to="/"
                  className={({ isActive}) =>
                    isActive ? "active" : ""
                  }
                  >
                    Home
                  </NavLink>
                </li>
                <li className='py-4'>
                  <NavLink
                  to="/blogs"
                  className={({ isActive}) =>
                    isActive ? "active" : ""
                  }
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className='py-4'>
                  <NavLink
                  className={({ isActive}) =>
                    isActive ? "active" : ""
                  }
                  to="/places">
                    Best Places
                  </NavLink>
                </li>
                <li className='py-4'>
                  <NavLink
                  className={({ isActive}) =>
                    isActive ? "active" : ""
                  }
                  to="/About">
                    About
                  </NavLink>
                </li>

                {/* DropDown Sections */}
                <li className='py-4 relative group cursor-pointer'>
                  <div className='flex items-center dropdown'>
                    <span>Quick Links</span>
                    <span>
                      <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
                    </span>
                  </div>
                  <div className='absolute top-[57px] -left-9 z-[9999] hidden group-hover:block shadow-md text-black
                  w-[150px] bg-white p-2'>
                    <ul>
                      {
                        dropdownLinks.map((data)=>{
                          return(
                            <li key={data.name}>
                              <a className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>
                                {data.name}
                              </a>
                          </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            {/* Book Now Button */}
            <div className='flex items-center gap-4'>
              <button
              onClick={()=>handelOrderPopup()}
              className='bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r
              hover:from-secondary hover:bg-primary transition-all duration-500
              text-white px-3 py-1 rounded-full'>
                Book Now
              </button>

              {/* Mobile Menu */}
              <div className='block md:hidden'>
                {
                  showMenu ? (
                    <HiMenuAlt1 className='cursor-pointer transition-all text-[30px]' onClick={toggleMenu}/>
                  ) : (
                    <HiMenuAlt3 className='cursor-pointer transition-all text-[30px]' onClick={toggleMenu}/>
                  )
                }
              </div>
            </div>

          </div>
        </div>

        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu}/>
      </div>
    </>
  )
}

export default Navbar