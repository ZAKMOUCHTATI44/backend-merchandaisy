import React from 'react'
import { Link as ScrolLink  } from 'react-scroll'


const BannerBlog = ({tags}) => {
  return (
    <div className='py-36 bannerBlog text-center'>
        <h2 className='text-white text-center text-6xl font-extrabold'>
            Blog.
        </h2>
        <ul className='block lg:flex justify-center items-center mt-5'>
            {tags.map((link)=>(
                <li key={link.id} className="my-2 lg:my-0">
                    <ScrolLink to={link.name} spy={true} smooth={true} hashSpy={true} duration={300} className='text-white mx-2 text-2xl border-b-2 border-white'>
                        {link.name}
                    </ScrolLink>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default BannerBlog
