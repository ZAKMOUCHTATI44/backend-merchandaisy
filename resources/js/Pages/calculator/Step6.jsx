import React, { useEffect, useState } from 'react'
import { Formik } from 'formik';
import { Inertia } from '@inertiajs/inertia';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import { Link } from '@inertiajs/inertia-react';
import { useDispatch, useSelector } from 'react-redux';
import Scroll from 'react-scroll';
import { setData } from '@/features/calculatorSlice';
import axios from "axios"

const Step6 = ({errorsBackEnd}) => {
    let [success,setSuccess]=useState(false)
    const {data,errors}=useSelector(state=>state.calculatorSlice)
    const dispatch=useDispatch()

    useEffect(()=>{
        let scroller = Scroll.scroller;
        scroller.scrollTo('steps')
    },[])

    const handleChange=(e)=>{
        console.log(e)
        dispatch(setData({[e.target.name]:e.target.value}))
    }


    return (
        <>
        <div className="grid grid-cols-2 gap-2">
            <div>
                <InputLabel className="text-start" forInput="name" value="Nom" />
                <div className="flex flex-col items-start">
                    <input
                        type="text"
                        name="firstname"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm mt-1 block w-full"
                        onChange={handleChange}
                        value={data?.firstname}
                    />
                </div>
                <InputError message={errors.firstname}  className="mt-2 text-start" />
            </div>
            <div>
                <InputLabel className="text-start" forInput="firstname" value="Prénom" />
                <div className="flex flex-col items-start">
                    <input
                        type="text"
                        name="lastname"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm mt-1 block w-full"
                        onChange={handleChange}
                        value={data?.lastname}
                    />
                </div>
                <InputError message={errors.lastname} className="mt-2 text-start" />
            </div>
        </div>
        <div className="mt-4">
            <InputLabel className="text-start" forInput="email" value="Email" />
                <div className="flex flex-col items-start">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm mt-1 block w-full"
                        value={data?.email}
                    />
                </div>
            <InputError message={errors.email} className="mt-2 text-start" />
        </div>
        <div className="mt-4">
            <InputLabel className="text-start" forInput="phone" value="Téléphone" />
                <div className="flex flex-col items-start">
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        onChange={handleChange}
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm mt-1 block w-full"
                        value={data?.phone}
                    />
                </div>
            <InputError message={errors.phone} className="mt-2 text-start" />
        </div>
        </>
      )
}




export default Step6
