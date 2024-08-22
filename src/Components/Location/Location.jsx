import React from 'react'

const Location = () => {
  return (
    <div>
        <div>
            <div className='container pb-10'>
                <h1 className='inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 sm:text-3xl text-xl font-bold'>
                    Location to visit
                </h1>

                <div className='rounded-xl'>
                    <iframe
                    src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1568.1544914432136!2d35.84790742958292!3d33.61040066601876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2slb!4v1724226982301!5m2!1sar!2slb'
                    width="100%"
                    height="360"
                    allowFullScreen=""
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    style={{borderRadius: "20px"}}>

                    </iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Location