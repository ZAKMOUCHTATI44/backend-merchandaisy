import React from 'react'
import Slider from "react-slick";
import { Link, usePage } from '@inertiajs/inertia-react';


const Blog = () => {
    const settings = {
      dots: true,
      infinite: true,
      arrows:false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const { blogs }=usePage().props
  return (
    <div className='my-24'>
        <div className="container mx-auto mt-24">
            <div className="text-center relative mt-12">
                <p className='text-6xl lg:text-8xl font-extrabold absolute -z-10 left-1 lg:left-16' style={{color:"rgb(230, 230, 230)"}}>
                    Nos guides nutrition
                </p>
                <h2 className='text-5xl text-center font-extrabold pt-12'>
                    Nos guides nutrition
                </h2>
            </div>

            <p className='mt-2 text-center text-2xl uppercase'>
                pour comprendre les besoins de votre alimentation.
            </p>
                <Slider {...settings} className="mt-5">
                    {blogs.map(blog=>(
                    <div className="flex" key={blog.id}>
                        <div className="item pb-12 w-11/12 mx-auto lg:w-3/4 lg:ml-auto">
                            <div className="img-blog">
                                <img src={blog.picture} alt={blog.title} />
                            </div>
                            <div className="desc-blog text-2xl font-bold px-5 mt-5">
                                <Link href="/blogs/" >
                                    {blog.title}
                                </Link>
                            </div>
                        </div>
                    </div>
                    ))}
                </Slider>
            <div className="mt-12 text-center">
                <Link href="/blog" className='bg-primary px-16 py-2 text-white text-xl uppercase'>
                    Voir Plus
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Blog
