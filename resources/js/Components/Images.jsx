import React from 'react'
import { usePage } from '@inertiajs/inertia-react'


const Images = () => {
    const { athletes }=usePage().props

  return (
    <section className="overflow-hidden text-gray-700 col-span-2 mt-5 lg:mt-0">
        <div className="container px-5 mx-auto">
            <div className="flex flex-wrap -m-1 lg:-m-2">
                {athletes.map(athlete=>(
                    <div className="flex flex-wrap w-1/3 lg:1/2" key={athlete.name} >
                        <div className="w-full p-1 lg:p-2">
                            <img alt={athlete.name} title={athlete.name} className="block object-cover object-center w-full h-full abtal"
                                src={athlete.image} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Images
