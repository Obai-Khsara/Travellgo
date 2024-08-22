import React from 'react'
import BlogsCard from './BlogsCard'
import Img1 from "../../assets/Images/places/tajmahal.jpg"
import Img2 from "../../assets/Images/places/water.jpg"
import Img3 from "../../assets/Images/places/boat.jpg"







const BlogsData = [
    {
        id: 1,
        image: Img1,
        title: "The 10 best places to visit in India",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores tempore accusamus, velit, quis dolorum porro nulla impedit nam aspernatur nostrum perspiciatis repellat fugit tenetur dolorem sequi? Quam blanditiis cupiditate iste non natus, nesciunt explicabo est velit fugiat molestias commodi, ipsam omnis, laudantium debitis ipsa enim impedit quod culpa consectetur molestiae neque? A aliquam explicabo natus laboriosam dolore magni eum beatae quos rem iste! Ex numquam cumque quod aspernatur quia saepe a! Molestias, adipisci facilis iste odit obcaecati eaque harum iusto, ipsam deleniti itaque ex. Quae laboriosam aliquam sed atque eaque nihil, ipsam similique reprehenderit suscipit exercitationem unde eum ipsa recusandae.",
        author: "John Doe",
        date : "April, 2022"
    },
    {
        id: 2,
        image: Img2,
        title: "Top places to visit in US",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores tempore accusamus, velit, quis dolorum porro nulla impedit nam aspernatur nostrum perspiciatis repellat fugit tenetur dolorem sequi? Quam blanditiis cupiditate iste non natus, nesciunt explicabo est velit fugiat molestias commodi, ipsam omnis, laudantium debitis ipsa enim impedit quod culpa consectetur molestiae neque? A aliquam explicabo natus laboriosam dolore magni eum beatae quos rem iste! Ex numquam cumque quod aspernatur quia saepe a! Molestias, adipisci facilis iste odit obcaecati eaque harum iusto, ipsam deleniti itaque ex. Quae laboriosam aliquam sed atque eaque nihil, ipsam similique reprehenderit suscipit exercitationem unde eum ipsa recusandae.",
        author: "Obai Khsara",
        date : "October, 2022"
    },
    {
        id: 3,
        image: Img3,
        title: "The 10 best places to visit in India",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores tempore accusamus, velit, quis dolorum porro nulla impedit nam aspernatur nostrum perspiciatis repellat fugit tenetur dolorem sequi? Quam blanditiis cupiditate iste non natus, nesciunt explicabo est velit fugiat molestias commodi, ipsam omnis, laudantium debitis ipsa enim impedit quod culpa consectetur molestiae neque? A aliquam explicabo natus laboriosam dolore magni eum beatae quos rem iste! Ex numquam cumque quod aspernatur quia saepe a! Molestias, adipisci facilis iste odit obcaecati eaque harum iusto, ipsam deleniti itaque ex. Quae laboriosam aliquam sed atque eaque nihil, ipsam similique reprehenderit suscipit exercitationem unde eum ipsa recusandae.",
        author: "MAher Khadour",
        date : "Jun, 2022"
    }
]


const BlogsComp = () => {
  return (
    <div>
        <div data-aos="fade-up" className='container'>
            <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>
                Our Latest Blogs
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    BlogsData.map((item,index)=>(
                        <BlogsCard key={index} {...item}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default BlogsComp