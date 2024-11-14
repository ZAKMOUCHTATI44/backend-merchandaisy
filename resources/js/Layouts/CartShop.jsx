import React, { useState,Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Popover, Transition,Dialog } from '@headlessui/react'
import { Link } from '@inertiajs/inertia-react'
import { closeCart } from '@/features/cartSlice'
import CardItem from './NavBar/CardItem'
import { Inertia } from '@inertiajs/inertia'


const CartShop = () => {
    const items=useSelector((state)=>state.cart.cart)
    const showPanier=useSelector((state)=>state.cart.showPanier)
    const dispatch=useDispatch()

    function closeModal() {
      dispatch(closeCart())
    }
    const totalCheckout=() => {
        return items.reduce((total,item)=>total + (item.price * item.qteCart ),0)
    }
    const checkoutPage=()=>{
        dispatch(closeCart())
        if(items.length > 0 ) {
            Inertia.get('/checkout')
        }else {
            Inertia.get('/menu')
        }
    }
  return (
    <Transition appear show={showPanier} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-end text-center h-screen ">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white  text-left align-middle shadow-xl transition-all h-screen flex justify-between flex-col	">
                    <Dialog.Title
                        as="div"
                        className="flex justify-between leading-6 text-gray-900 bg-gray-100 py-5 px-3 font-semibold"
                    >
                        <p>
                        Mon panier
                        </p>
                        <svg onClick={closeModal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </Dialog.Title>
                        <div className={`${items.length >0 ? "flex-1" :"flex justify-center"  } "pb-5 px-3 overflow-x-auto" `}  >
                            { items.length > 0 ?
                                (
                                items.map(item=>(
                                  <CardItem product={item} key={`${item.id} * cartItem`}/>
                               ))) : (
                                <h6 className="text-center">Votre panier est vide !</h6>
                           )}
                        </div>
                        <div className="bg-gray-100 py-5 px-3 font-semibold">
                        <div className='flex justify-between'>
                            <p>
                            Sous-total du panier :
                            </p>
                            <span>
                                {totalCheckout()} MAD
                            </span>
                        </div>
                        <div>
                            <button onClick={checkoutPage} className='w-full block text-center bg-primary text-white py-2 px-5 my-3 border border-primary outline-none hover:bg-white hover:text-black'>
                                Commander
                            </button>
                            <button onClick={closeModal} className="w-full border border-primary py-2 px-5 text-gray-400">
                                Poursuivre vos achats
                            </button>
                        </div>
                    </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
    </Transition>
  )
}

export default CartShop
