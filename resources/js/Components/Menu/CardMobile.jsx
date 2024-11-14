import { addToCart } from '@/features/cartSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import whiskWhite from  "../../../images/icons/whisk-white.png"

const CardMobile = ({item}) => {
    let [toggle,setToggle]=useState(false)
    const dispatch=useDispatch();

    const addClick=(e)=>{
        dispatch(addToCart(e))
    }
  return (
  <div className='my-1 mx-2 relative' style={{backgroundColor:"rgb(246, 246, 246)"}}>
    <div className='flex items-center relative justify-between my-5 '>
        <div className="img-whisk absolute top-0 right-0 bg-primary p-2" onClick={()=>setToggle(true)}>
            <img src={whiskWhite} width="25px"/>
        </div>
        <div className="img">
            <img src={item.image} width="150px" height="150px" alt="" />
        </div>

        <div className="desc ml-2 py-12" style={{'width':"-webkit-fill-available"}}>
                <h6 className='font-bold mr-10'>{item.title} </h6>
                <p className='text-gray-500 my-3'>
                    {item.price} MAD
                </p>
                <p className='text-gray-500 my-3'>{item.info} </p>
                <div>
                    <div className="grid grid-cols-4 border-b-2 border-priamry pb-3">
                        <p className='text-gray-500'>Prot</p>
                        <p className='text-gray-500'>Carbs</p>
                        <p className='text-gray-500'>Fat</p>
                        <p className='text-gray-500'>Cal</p>
                    </div>
                    <div className="grid grid-cols-4 pt-3">
                        <p className='text-gray-500'>{item.prot} g</p>
                        <p className='text-gray-500'>{item.carbs} g</p>
                        <p className='text-gray-500'>{item.fat} g</p>
                        <p className='text-gray-500'>{item.kcal} g</p>
                    </div>
            </div>
            <button className='bg-primary lg:hidden px-5 py-2 mx-auto mt-5 text-white add-to-cart' onClick={()=>{addClick(item)}}>
                Ajouter au panier
            </button>
        </div>
    </div>
        <div className={`${toggle ? "back":"hidden"} absolute top-0 h-full bg-primary items-center justify-center px-10 `}>
                <div className="content flex flex-col justify-center h-full">
                    <button className="absolute top-2 right-2"  onClick={()=>setToggle(false)}>
                        <span className="material-symbols-outlined text-white text-2xl">close</span>
                    </button>
                    <div className="img-whisk pb-3">
                        <img src={whiskWhite} width="35px" className='mx-auto'/>
                    </div>
                    <h5 className='font-bold text-xl text-white text-center'>
                        {item.title}
                    </h5>
                    <p className="text-white text-center py-3">
                        {item.description}
                    </p>
                    <button className='px-5 py-2 w-full mt-1 bg-white text-black border border-white mb-5 uppercase' onClick={()=>{addClick(item)}}>
                        Ajouter au panier
                    </button>
            </div>
        </div>
 </div>

  )
}

export default CardMobile
