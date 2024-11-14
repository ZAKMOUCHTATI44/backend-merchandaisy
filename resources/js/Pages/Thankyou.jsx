import { clearAllProduct } from '@/features/cartSlice'
import App from '@/Layouts/App'
import { Head, Link } from '@inertiajs/inertia-react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ThankYouSvg from "../../images/icons/thanks-msg-2.svg"

const Thankyou = () => {
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(clearAllProduct())
    },[])


    return (
    <App>
        <Head title="Merci pour votre commande" />
        <div className='container mx-auto py-12'>
            <div className="text-center">
                <img src={ThankYouSvg} width="100px" className='mx-auto mb-5' />
                <h3 className='font-semibold text-2xl'>
                    Merci pour votre commande!
                </h3>
                <p className='font-medium mt-5'>
                    Nous vous contacterons pour confirmer votre demande
                </p>
                <span className='text-gray-400 inline-block'>
                    Merci pour votre demande !
                </span>
            </div>
            <div className="text-center mt-3">
                <Link href="/menu" className='inline-block text-center bg-primary text-white py-2 px-5 my-3 border border-primary outline-none hover:bg-white hover:text-black'>
                    Poursuivre vos achats
                </Link>
            </div>
        </div>
    </App>
  )
}

export default Thankyou
