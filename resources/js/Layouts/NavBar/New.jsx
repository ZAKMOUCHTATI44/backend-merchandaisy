import React, { Fragment,useEffect,useState } from 'react'
import { Link } from '@inertiajs/inertia-react'
import ArrowDown from '../../../images/icons/arrow_downward.svg'
import search from "../../../images/icons/search.svg"
import shoppingCart from "../../../images/icons/shopping_bag.svg"
import account from "../../../images/icons/person_FILL0.svg"
import { Popover, Transition,Dialog } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import CardItem from './CardItem'
import logo from '../../../images/logo.png'
import CartShop from '../CartShop'
import { openCart } from '@/features/cartSlice'
import DropDown from './DropDown'
import NavLinks from './NavLinks'

const New = ({auth}) => {
    const items=useSelector((state)=>state.cart.cart)
    const dispatch=useDispatch()
    function openModal() {
        dispatch(openCart())
    }
    const getTotalItem=()=>{
        return items.reduce((total,item)=>total + (item.qteCart ),0)
    }

  return (
    <>
        <Popover className="relative bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center justify-between flex-row-reverse lg:flex-row border-b-2 border-gray-100 py-2 lg:justify-evenly lg:space-x-10">
                <NavLinks />
                <div className="flex lg:order-2">
                    <div className="flex items-center">
                        <div>
                            { (auth?.user) ? (
                                <DropDown user={auth?.user} />
                            ) : (
                                <Link href='/login'>
                                    <img src={account} alt="account icon" className="mx-5" width="30px" />
                                </Link>
                            )}
                        </div>
                        <div onClick={openModal} className="relative">
                            <span className='absolute bg-primary text-white text-center -top-3 -right-3 rounded-full w-6 h-6'>
                                { getTotalItem() }
                            </span>
                            <img src={shoppingCart} alt="shopping icon" width="25px" />
                        </div>
                    </div>
                </div>
                <div className="-my-2 -mr-2 lg:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0">
                    <span className="sr-only">Open menu</span>
                    <span className="material-symbols-outlined">menu</span>
                </Popover.Button>
                </div>
            </div>
            </div>
            <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
            <Popover.Panel focus className="z-20 absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden">
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                    <div className="flex items-center justify-end">
                    <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0">
                        <span className="sr-only">Close menu</span>
                        <span className="material-symbols-outlined">close</span>
                    </Popover.Button>
                    </div>
                </div>
                </div>
                <div className="space-y-6 py-6 px-5">
                    <Link href="/" className="font-bold mr-1 block py-2 pl-3 pr-4  text-gray-700 rounded lg:bg-transparent lg:p-0" aria-current="page">
                        Accueil
                    </Link>
                    <Link href="/menu" className="font-bold mr-1 block py-2 pl-3 pr-4  text-gray-700 rounded lg:bg-transparent lg:p-0" aria-current="page">
                        Menu
                    </Link>
                    <Link href="/about-us" className="font-bold mr-1 block py-2 pl-3 pr-4  text-gray-700 rounded lg:bg-transparent lg:p-0" aria-current="page">
                        A propos de nous
                    </Link>
                    <Link href="/calculator" className="font-bold mr-1 block py-2 pl-3 pr-4  text-gray-700 rounded lg:bg-transparent lg:p-0" aria-current="page">
                        Calculator
                    </Link>
                    <Link href="/blog" className="font-bold mr-1 block py-2 pl-3 pr-4  text-gray-700 rounded lg:bg-transparent lg:p-0" aria-current="page">
                        Blog
                    </Link>
                    <Link href="/contact" className="font-bold mr-1 block py-2 pl-3 pr-4  text-gray-700 rounded lg:bg-transparent lg:p-0" aria-current="page">
                        Contact
                    </Link>
                </div>
            </div>
            </Popover.Panel>
            </Transition>
        </Popover>
        <CartShop />
    </>
  )
}

export default New
