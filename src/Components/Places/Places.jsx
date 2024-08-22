import React from 'react'
import PlacesCard from './PlacesCard'
import Img1 from "../../assets/Images/places/boat.jpg"
import Img2 from "../../assets/Images/places/tajmahal.jpg"
import Img3 from "../../assets/Images/places/water.jpg"
import Img4 from "../../assets/Images/places/place4.jpg"
import Img5 from "../../assets/Images/places/place5.jpg"
import Img6 from "../../assets/Images/places/place6.jpg"



const PlacesData = [
    {
        img: Img1,
        title: "Boat tour",
        location: "USA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, repellat",
        price: 100,
        type: "Cultural Relax"
    },
    {
        img: Img2,
        title: "Taj Mahal",
        location: "India",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, repellat",
        price: 6700,
        type: "Cultural Relax"
    },
    {
        img: Img3,
        title: "Underwater",
        location: "US",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, repellat",
        price: 6200,
        type: "Cultural Relax"
    },
    {
        img: Img4,
        title: "Sydney",
        location: "USA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, repellat",
        price: 6700,
        type: "Cultural Relax"
    },
    {
        img: Img5,
        title: "Los Angelos",
        location: "United State",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, repellat",
        price: 6700,
        type: "Cultural Relax"
    },
    {
        img: Img6,
        title: "Las Vegas",
        location: "California",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, repellat",
        price: 6200,
        type: "Cultural Relax"
    }
]



const Places = ({handelOrderPopup}) => {
  return (
    <div className='bg-gray-50 py-10'>
        <div className='container'>
            <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>
                Best Places to visit
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    PlacesData.map((item,index)=>(
                        <PlacesCard
                        handelOrderPopup={handelOrderPopup}
                        key={index} {...item}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Places