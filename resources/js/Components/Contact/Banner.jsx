import React from 'react'

const Banner = (props) => {
  return (
    <div className={` ${props.className} flex items-center `}>
        <div className="container mx-auto text-white font-extrabold">
                <h2 className="text-6xl">
                    Contact
                </h2>
                <p className='text-4xl font-semibold mt-5'>
                    Une question ? C’est à vous !
                </p>
        </div>
    </div>
  )
}

export default Banner
