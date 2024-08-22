import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
    {
        id: 1,
        name: "Sam",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sequi in nesciunt ab voluptatem deserunt minima itaque ut, voluptatum consectetur non! Nam itaque neque quae quasi recusandae atque a ea!",
        img: "https://picsum.photos/101/101"
    },
    {
        id: 2,
        name: "Jana",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sequi in nesciunt ab voluptatem deserunt minima itaque ut, voluptatum consectetur non! Nam itaque neque quae quasi recusandae atque a ea!",
        img: "https://picsum.photos/102/102"
    },
    {
        id: 3,
        name: "Yara",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sequi in nesciunt ab voluptatem deserunt minima itaque ut, voluptatum consectetur non! Nam itaque neque quae quasi recusandae atque a ea!",
        img: "https://picsum.photos/103/103"
    }
]


const Testimonial = () => {

    var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
        {
        breakpoint: 10000,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
        },
        },
        
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
        }
        },

        {
        breakpoint: 640,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        },
    ],
    };


    
  return (
    <div className='py-10'>
        <div className="container">
            {/* header section */}
            <div className='text-center mb-20 max-w-[400px] mx-auto'>
                <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                    Testimonial
                </p>
                <h1 className='text-3xl font-bold'>Testimonial</h1>
                <p className='text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, qui nulla rem optio ex nemo voluptate autem et fuga debitis? Rerum corporis nemo inventore quidem modi saepe ipsum! Enim, eligendi?
                </p>
            </div>
            
            {/* testimonial section */}
            <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
            >
                <Slider {...settings}>
                    {
                        TestimonialData.map(({id,name,text,img})=>{
                            return(
                                <div key={id} className='my-6'>
                                    <div className='relative flex flex-col items-center justify-center gap-4 text-center
                                    shadow-lg p-4 mx-4 rounded-xl bg-primary/10'>
                                        <img src={img} alt='image' className='rounded-full mx-auto block'/>
                                        <h1 className='text-xl font-bold'>{name}</h1>
                                        <p className='text-gray-500 text-sm'>{text}</p>
                                        <p className='text-9xl text-black/20 font-serif absolute top-0 right-0'>,,</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonial