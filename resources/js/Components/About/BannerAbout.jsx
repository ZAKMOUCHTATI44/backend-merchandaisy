import React from 'react'

const BannerAbout = () => {
    // const items=[
    //     "Produit frais",
    //     "100% Naturel",
    //     "Faible en sucre",
    //     "Faible en sodium",
    //     "Sans OGM",
    //     "Sans Gluten"
    // ]
  return (
    <>
        <div className='bannerAbout'>
        </div>
        <div className="container mx-auto">
            <div className='block lg:flex justify-center items-center mt-0'>
                {/* {items.map(item=>(
                    <div className=' aboutItem h-32 w-32 flex items-center justify-center text-primary border-2 border-primary mx-auto lg:mx-3 mt-3' style={{borderRadius:'50%'}} key={item}>
                        <p className='text-center p-2 font-extrabold'>
                            {item}
                        </p>
                    </div>

                ))} */}
            </div>
        </div>
    </>
  )
}

export default BannerAbout
