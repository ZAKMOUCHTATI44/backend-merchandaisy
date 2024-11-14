import React from 'react'
import grid1 from "../../images/athlete/grid-1.webp"
import Images from './Images'


const Athlete = () => {
  return (
    <div className='relative mb-12'>
        <div className="container mx-auto">
            <p className='text-8xl font-extrabold absolute right-2 -z-20  ' style={{color:"rgb(230, 230, 230)"}}>
                Community
            </p>
            <h2 className='text-5xl text-center font-extrabold pt-12'>
                # Je_Profite
            </h2>
            <p className='mt-2 text-center text-2xl uppercase'>
                Nous sommes une communauté avant d’être un restaurant !
            </p>
            <div className="images-athlete mx-auto grid grid-cols-1 lg:grid-cols-3 mt-12">
                <div className="flex flex-wrap w-full">
                    <div className="w-full ">
                        <img alt="gallery" className="block object-cover object-center w-full h-full"
                        src={grid1} />
                    </div>
            </div>
                <Images />
            </div>
            <div className="mt-5 text-center">
                <a href="https://www.instagram.com/pro_fit_maroc/" target="_blank" className='bg-primary px-16 py-2 text-white text-xl uppercase inline-block'>
                    Voir Plus
                </a>

            </div>
            <p className='text-6xl lg:text-8xl font-extrabold absolute left-5 -z-20' style={{color:"rgb(230, 230, 230)"}}>
                lifeSTYLE
            </p>
        </div>
    </div>
  )
}

export default Athlete
