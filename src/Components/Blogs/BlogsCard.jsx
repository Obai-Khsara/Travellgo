import React from 'react'
import { Link } from 'react-router-dom'

const BlogsCard = ({image,title,description,author, date}) => {
  return (
    <Link
    to={`/blogs/${title}`}
    state={{image,description,title,date,author}}
    >
        <div className='p-4 shadow-lg transition-all duration-500 hover-shadow-xl'>
            <div className='overflow-hidden'>
                <img src={image} alt='image' className='h-[250px] w-full mx-auto object-cover
                transition-all duration-700 hover:skew-x-2 hover:scale-110'/>
            </div>

            <div className='flex md:flex-col lg:flex-row justify-between pt-2 text-slate-600'>
                <p>{date}</p>
                <p>by {author}</p>
            </div>

            <div className='space-y-2 py-3'>
                <h1 className='line-clamp-1 font-bold'>{title}</h1>
                <p className='line-clamp-2'>{description}</p>
            </div>
        </div>
    </Link>
  )
}

export default BlogsCard