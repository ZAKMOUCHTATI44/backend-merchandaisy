import React, { useEffect, useState } from 'react'
import whiskWhite from  "../../../images/icons/whisk-white.png"
import "../../../css/Product.css"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cartSlice'


const Card = ({product}) => {
    let [toggle,setToggle]=useState(false)
    const dispatch=useDispatch();

    const addClick=(e)=>{
        dispatch(addToCart(e))
    }


  return (
    <div className={`${toggle ? "itemProductBack":"itemProductFront"} itemProduct relative` }>
                <div className="front">
                    <div className="tags flex justify-between items-center">
                        <div className="img-badge bg-black inline-block px-2 text-white mt-2">
                            {product.tag}
                        </div>
                        <div className="img-whisk bg-primary p-2" onClick={()=>setToggle(true)}>
                            <img src={whiskWhite} width="35px"/>
                        </div>
                    </div>

                    <div className="img-product text-center">
                        <img src={product.image} alt="productAlt" className='mx-auto' />
                    </div>
                    <div className="product-desc text-center">
                        <h5 className='font-bold text-xl title-product h-16'>
                            {product.title}
                        </h5>
                        <p className='text-black my-3'>
                            {product.price} MAD
                        </p>
                    <div>
                        <div className="grid grid-cols-4 border-b-2 border-priamry pb-3">
                            <p className='text-center text-gray-500'>Prot</p>
                            <p className='text-center text-gray-500'>Carbs</p>
                            <p className='text-center text-gray-500'>Fat</p>
                            <p className='text-center text-gray-500'>Cal</p>
                        </div>
                        <div className="grid grid-cols-4 pt-3">
                            <p className='text-center text-gray-500'>{product.prot} g</p>
                            <p className='text-center text-gray-500'>{product.carbs} g</p>
                            <p className='text-center text-gray-500'>{product.fat} g</p>
                            <p className='text-center text-gray-500'>{product.kcal} g</p>
                        </div>
                    </div>
                    <button className='bg-primary px-5 py-2 w-full mt-5 text-white add-to-cart mb-5' onClick={()=>{addClick(product)}}>
                        Ajouter au panier
                    </button>

                </div>
                </div>
                <div className={`${toggle ? "back":"hidden"} absolute top-0 h-full bg-primary items-center justify-center px-10 `}>
                   <div className="content">
                        <button className="absolute top-2 right-2"  onClick={()=>setToggle(false)}>
                            <span className="material-symbols-outlined text-white text-2xl">close</span>
                        </button>
                        <div className="img-whisk pb-5">
                            <img src={whiskWhite} width="35px" className='mx-auto'/>
                        </div>
                        <h5 className='font-bold text-xl text-white text-center'>
                            {product.title}
                        </h5>
                        <p className="text-white text-center py-5">
                            {product.description}
                        </p>
                        <button className='px-5 py-2 w-full mt-5 bg-white text-black border border-white mb-5 uppercase'>
                            Ajouter au panier
                        </button>
                    </div>
                </div>
    </div>
  )
}

export default Card
