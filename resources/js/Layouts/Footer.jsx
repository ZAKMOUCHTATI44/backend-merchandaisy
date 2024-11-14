import Progress from '@/Components/Contact/Progress'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import facebook from "../../images/icons/facebook.svg"
import instagram from "../../images/icons/instagram.svg"
import youtube from "../../images/icons/youtube.svg"


const Footer = () => {
    const [email,setEmail] =useState('') ;
    const [data,setData] = useState({
        success:'',
        errors:''
    });
    const HandleSubmit=(e)=>{
        if( !email ){
            return setData({errors:`Ce champ est obligatoire`})
        }else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
            ) {
            return setData({'errors':`L'email n'est pas valide.`})
        }
        axios.post('/news-letter',{email})
        .then(res=>{
            setData({success:`Merci, vous êtes inscrit`})
        })
        .catch(err=>setData({errors:`L'email n'est pas valide.`}))
    }

  return (
    <>
    <Progress />
    <div className='bg-black text-white'>
        <div className='footer relative py-32'>
            <div className="container mx-auto">
                <p className='absolute top-12 text-6xl lg:text-8xl font-bold' style={{color:"rgb(159 159 159)",opacity:0.5}}>
                    NewsLetter
                </p>
                <h3 className='text-3xl px-5'>
                    <span className="font-semibold block mb-2">
                        Recevez nos Meilleurs Deals
                    </span>
                    et nos derniéres actualités !
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 items-end">
                    <div>
                        <div className='relative flex justify-between mt-12 mx-0 lg:mx-5 h-7 w-full' style={{borderBottom:"2px solid rgb(64, 64, 64)"}}>

                            <input
                                type="text"
                                onChange={e=>setEmail(e.target.value)}
                                placeholder='Votre adresse mail'
                                className='bg-transparent border-none outline-none w-full focus:ring-0'
                                value={email}
                            />
                            <button onClick={HandleSubmit} className='absolute bottom-0 right-0 flex items-center'>
                                S'abonner
                                <span className="material-symbols-outlined ml-1">
                                arrow_forward
                                </span>
                            </button>
                        </div>
                            {data?.errors && (
                                <>
                                    <p className='text-red-500 block mt-3 mx-0 lg:mx-5 h-7 w-full'>
                                        {data?.errors}
                                    </p>
                                </>
                            )}
                            {data?.success && (
                                <>
                                    <p className='text-green-500 block mt-3 mx-0 lg:mx-5 h-7 w-full'>
                                        {data?.success}
                                    </p>
                                </>
                            )}
                        </div>

                    <div className='col-span-2 lg:flex justify-end'>
                        <div className="link-1 my-12 lg:m-0 px-5 lg:px-5">
                            <h5 className='font-bold mb-2'>
                                ProFit™
                            </h5>
                            <ul>
                                <li className='mb-2'>
                                    <a href="/about-us" style={{color:"rgb(143, 143, 143)"}}>
                                        à propos de nous
                                    </a>
                                </li>
                                <li className='mb-2'>
                                    <a href="/menu" style={{color:"rgb(143, 143, 143)"}}>
                                    Notre Menu
                                    </a>
                                </li>
                                <li className='mb-2'>
                                    <a href="/blog" style={{color:"rgb(143, 143, 143)"}}>
                                        Blog
                                    </a>
                                </li>
                                <li className='mb-2'>
                                    <a href="/" style={{color:"rgb(143, 143, 143)"}}>
                                        Communauté Profit
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="link-1 my-12 lg:m-0 px-5 lg:px-5">
                            <h5 className='font-bold mb-2'>
                                AIDE
                            </h5>
                            <ul>
                                <li className='mb-2'>
                                    <a href="/contact" style={{color:"rgb(143, 143, 143)"}}>
                                        Contact
                                    </a>
                                </li>
                                <li className='mb-2'>
                                    <a href="FAQ" style={{color:"rgb(143, 143, 143)"}}>
                                        FAQ
                                    </a>
                                </li>
                                <li className='mb-2'  style={{color:"rgb(143, 143, 143)"}}>
                                    Mail :
                                    <a href="mailto:support@pro-fit.ma" className='ml-2'>
                                        support@pro-fit.ma
                                    </a>
                                </li>
                                <li className='mb-2' style={{color:"rgb(143, 143, 143)"}}>
                                    Tél :
                                    <a href="tel:0619197493" className='ml-2'>
                                        06.19.19.74.93
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="links mt-12 px-5">
                    <div className="flex">
                        <div className='w-8 bg-white p-1 rounded-full'>
                            <a href="https://www.facebook.com/people/Pro-Fit/100083337849211/" target="_blank">
                                <img src={facebook} alt="facebook profit" />
                            </a>
                        </div>
                        <div className='w-8 bg-white p-1 rounded-full mx-2'>
                            <a href="https://www.instagram.com/pro_fit_maroc/" target="_blank">
                                <img src={instagram} alt="instagram profit" />
                            </a>
                        </div>
                        <div className='w-8 bg-white p-1 rounded-full'>
                            <a href="https://www.instagram.com/pro_fit_maroc/" target="_blank">
                                <img src={youtube} alt="youtube profit" />
                            </a>
                        </div>
                    </div>
                    <p className='mt-5 text-sm'>
                        Politique de confidentialité
                    </p>
                    <p className='my-2 text-sm'>
                        Mentions légales
                    </p>
                    <p className='text-sm'>
                        Conditions générales de vente
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>

  )
}

export default Footer
