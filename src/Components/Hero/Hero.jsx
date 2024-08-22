import React, { useState } from 'react'

const Hero = () => {

  const [priceValue, setPriceValue] = useState(40)

  return (
    <div className='bg-black/20 h-full'>
        <div className='h-full flex justify-center items-center p-4 bg-primary/10'>
            <div className='container grid grid-cols-1 gap-4'>
              {/* text content section */}
              <div className='text-white'>
                <p data-aos="fade-up">Our Packages</p>
                <p
                data-aos="fade-up"
                data-aos-delay="300"
                className='font-bold text-3xl'
                >
                  Search Your Destination
                </p>
              </div>

              {/* form section */}
              <div
              data-aos="fade-up"
              data-aos-delay="600"
              className='relative bg-white p-4 space-y-4 rounded-md'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 py-3'>
                  
                  <div>
                    <label htmlFor='destination' className='opacity-70'>
                      Search Your Destination
                    </label>
                    <input type='text' name="destination" id='destination' placeholder='Dubai' className='w-full bg-gray-100
                    my-2 p-2 rounded-full outline-1 focus:outline focus:outline-primary'/>
                  </div>

                  <div>
                    <label htmlFor='destination' className='opacity-70'>
                        Date
                      </label>
                      <input type='date' name="destination" id='destination' className='w-full bg-gray-100
                      my-2 p-2 rounded-full outline-1 focus:outline focus:outline-primary !placeholder-slate-400'/>
                  </div>

                  <div>
                    <label htmlFor='destination' className='opacity-70 block'>
                        <div className='w-full flex justify-between items-center'>
                          <p>Max Price</p>
                          <p className='font-bold text-xl'>${priceValue}</p>
                        </div>
                    </label>
                    <div className='bg-gray-100 rounded-full p-2 flex items-center justify-center'>
                      <input
                      type='range'
                      name="destination"
                      id="destination"
                      className='appearance-none w-full bg-gradient-to-r from-primary to-secondary rounded-full
                      h-2 my-2'
                      min="150"
                      max="1000"
                      value={priceValue}
                      step="10"
                      onChange={(e) => setPriceValue(e.target.value)}
                      />
                    </div>
                  </div>

                </div>

                {/* button search */}
                <button className='bg-gradient-to-r from-primary to-secondary text-white hover:scale-105
                px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2'>
                  Search Now
                </button>

              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero