import { Link } from '@inertiajs/inertia-react'
import React from 'react'


const Entrainements = ({blog}) => {
  return (
    <div className='my-24' id="Entrainements">
        <div className="container mx-auto px-5 lg:px-12">
            <h3 className="font-bold text-5xl">
                Entrainements
            </h3>
            <p className='mt-2 mb-5'>
                Apprendre, Découvrir, S'instruire
            </p>
            <div className="block lg:grid grid-cols-3 items-center">
                <div>
                    <img src={blog.picture} alt={blog.title} />
                </div>
                <div className='col-span-2 px-2 mt-5 lg:px-8 w-full lg:w-11/12'>
                    <h5 className='text-3xl font-semibold' dangerouslySetInnerHTML={{__html: blog.title}}></h5>
                    <p className='mt-5 text-gray-500 text-justify'>
                        {blog.content}
                    </p>
                    <Link className='uppercase bg-primary mt-5 py-2 inline-block text-white px-16'>
                        lire plus
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Entrainements
