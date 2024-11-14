import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import "../../css/header.css"


const Header = () => {
  return (
    <div className='header flex items-end justify-center lg:py-32 lg:pb-12 pt-96'>
        <div className="container mx-auto ">
            <div className="content w-full px-3 lg:p-0 lg:w-1/2 ">
                <h2 className='text-2xl lg:text-5xl text-center lg:text-start font-extrabold'>
                    Ce n'est pas une diète, <br />
                    C'est un style de vie
                </h2>
                <p className='my-2 lg:my-5 text-gray-500 font-light text-center lg:text-start'>
                   <span className='text-black font-extrabold mr-1'>
                        ProFit™
                    </span>
                    est un restaurant engagé qui propose des plats fraîchement cuisinés, approuvés par nos experts en nutrition, et personnalisables en macronutriments.
                </p>
                <Link href="/menu" className='bg-primary px-8 py-2 text-white text-xl mx-auto block lg:inline hover:bg-black text-center'>
                    Je veux profiter
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header
