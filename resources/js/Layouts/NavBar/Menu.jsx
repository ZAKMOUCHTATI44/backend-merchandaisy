import React, { Fragment,useEffect,useState } from 'react'
import { Link } from '@inertiajs/inertia-react'
import ArrowDown from '../../../images/icons/arrow_downward.svg'
import search from "../../../images/icons/search.svg"
import shoppingCart from "../../../images/icons/shopping_bag.svg"
import account from "../../../images/icons/person_FILL0.svg"
import { Popover, Transition,Dialog } from '@headlessui/react'
import { useSelector } from 'react-redux'
import CardItem from './CardItem'

const Menu = () => {
    let [isOpen, setIsOpen] = useState(false)

    const items=useSelector((state)=>state.cart.cart)

    function closeModal() {
      setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true)
    }
    const getTotalItem=()=>{
        return items.reduce((total,item)=>total + (item.qteCart ),0)
    }
    const totalCheckout=() => {
        return items.reduce((total,item)=>total + (item.price * item.qteCart ),0)
    }
  return (
    <>
        <nav className="bg-white px-2 sm:px-4 py-2.5  w-full z-20 top-0 left-0 border-b border-gray-200">
            <div className="container flex flex-wrap items-center justify-around mx-auto">
                <div className="flex items-center">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-white">
                    <li className='flex items-center'>
                        <Link href="/" className="font-bold mr-1 block py-2 pl-3 pr-4 text-black rounded lg:bg-transparent lg:p-0" aria-current="page">
                            Accueil
                        </Link>
                        <img src={ArrowDown} width="18px" />
                    </li>
                    <li className='flex items-center bg-primary px-2 py-1'>
                        <Link href="/menu" className="flex items-center py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                            Menu
                            <img src={ArrowDown} width="18px" className='ml-2'/>
                        </Link>

                    </li>
                    <li className='flex items-center'>
                        <Link href="/about-us" className="font-bold mr-1 block py-2 pl-3 pr-4 text-black rounded lg:bg-transparent lg:p-0" aria-current="page">
                            A propos de nous
                        </Link>
                        <img src={ArrowDown} width="18px" />
                    </li>
                    </ul>
                </div>
                <div className="flex lg:order-2">
                    <div className="flex items-center">
                        <div>
                            <Link href="/menu">
                                <img src={search} width="25px" />
                            </Link>
                        </div>
                        <div>
                            <Link href='/login'>
                                <img src={account} className="mx-5" width="30px" />
                            </Link>
                        </div>
                        <div onClick={openModal} className="relative">
                            <span className='absolute bg-primary text-white text-center -top-3 -right-3 rounded-full w-6 h-6'>
                                { getTotalItem() }
                            </span>
                            <img src={shoppingCart} width="25px" />
                        </div>
                    </div>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-white">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded">
                                Calculator
                            </a>
                        </li>
                        <li>
                            <Link href="/blog" className="block py-2 pl-3 pr-4 text-gray-700 rounded">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="block py-2 pl-3 pr-4 text-gray-700 rounded">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Transition appear show={isOpen} as={Fragment}>
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
                            <Link to="/cart" className='w-full block text-center bg-primary text-white py-2 px-5 my-3 border border-primary outline-none hover:bg-white hover:text-black'>
                                Acheter maintenant
                            </Link>
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
    </>
  )
}

export default Menu
