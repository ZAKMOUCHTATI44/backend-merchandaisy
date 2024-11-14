import React from 'react'

const Banner = () => {
  return (
    <div className='banner py-12 mb-12 hidden lg:block'>
        <div className="container mx-auto text-white pl-12">
           <h2 className='text-3xl lg:text-5xl'>
            SUR LA 1er COMMANDE
           </h2>
           <div className='flex items-center'>
                <p className='text-3xl lg:text-5xl my-3  '>
                     50%
                </p>
                <button className='ml-2 text-primary px-8 py-2 text-xl bg-transparent border border-white'>
                    Je profite
                </button>
           </div>
           <p className="text-3xl lg:text-5xl">
            EXTRA OFF
           </p>
        </div>

    </div>
  )
}

export default Banner
