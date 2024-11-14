import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import plat1 from '../../images/Plat/PLAT 1.png'
import plat2 from '../../images/Plat/PLAT 2.png'
import plat3 from '../../images/Plat/PLAT 3.png'


const JeProfite = () => {
    let { plans } = usePage().props

    const handleClick=(item)=>{
        console.log(item)
    }

  return (
    <div className='my-12'>
        <div className='container mx-auto'>
            <div className='text-3xl font-extrabold JeProfite relative flex items-center'>
                <p className='text-6xl lg:text-8xl' style={{color:"rgb(230, 230, 230)"}}>
                    Je Profite .
                </p>
                <h2 className='absolute left-9 text-4xl'>
                    Je Profite
                </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 px-0 lg:px-16 mt-12  lg:hidden">
                {plans.map(item => (
                    <div onClick={()=>handleClick(item)} key={`${item.label}*Monile`}  className='my-3 mx-5' style={{backgroundColor:"rgb(246, 246, 246)"}}>
                            <div className='flex items-center justify-between my-5'>
                                <div className="img">
                                    <img src={item.image} width="120px" height="120px" alt="" />
                                </div>
                                <div className="desc ml-2" style={{'width':"-webkit-fill-available"}}>
                                    <h6 className='font-bold text-xl'>{item.label} </h6>
                                    <p className='text-gray-500 my-3'>{item.info} </p>
                                    <div className="flex items-center justify-start">
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='text-gray-500'>
                                        </p>
                                        <div>
                                        </div>
                                    </div>
                                <button className='bg-primary lg:hidden px-5 py-2 mx-auto mt-3 text-white add-to-cart mb-5' onClick={()=>{addClick(product)}}>
                                    Voir Plus
                                </button>
                                </div>
                            </div>
                            <div className="flex justify-center">
                            </div>
                    </div>
                ))}
            </div>
            <div className="hidden grid-cols-1 lg:grid-cols-3 px-0 lg:px-16 mt-12  lg:grid">
                {plans.map(item => (
                  <div onClick={()=>handleClick(item)}  key={`${item.label}*Desc`} className="item pb-12 w-11/12 mx-auto my-5 lg:my-auto">
                    <div className="img-badge bg-primary inline-block px-2 text-white mt-2">
                        Nouveau plat
                    </div>
                    <div className="img-product text-center">
                        <img src={item.image} alt="productAlt" className='mx-auto' />
                    </div>
                    <div className="product-desc text-center">
                        <h5 className='font-bold text-xl title-product'>
                                {item.label}
                        </h5>
                        <p className='text-gray-500 my-3'>
                            {item.info}
                        </p>

                        <div className="flex items-center justify-center">
                            <GetStars e={item.stars} />
                        </div>
                    </div>
                  </div>
                ))}
            </div>

        </div>
    </div>
  )
}

const GetStars=({e})=>{
    let stars=[];
    for(let i= 0; i < e ; i++){
        stars.push(
            <svg key={'starsYellow'+ i} aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        )
    }
    let grayStars=5 - e
    for(let i= 0; i < grayStars ; i++){
        stars.push(
        <svg key={'starsGray'+ i} aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        )
    }
    return (
        <>
            {stars}
        </>
    )
}
export default JeProfite


