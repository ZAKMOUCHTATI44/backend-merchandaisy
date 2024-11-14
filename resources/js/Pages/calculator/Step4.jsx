import React, { useEffect, useState } from 'react'
import "flatpickr/dist/themes/material_green.css";
import MaterialUIPickers from './MaterialUIPickers';
import Ville from './Ville';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '@/features/calculatorSlice'
import Scroll from 'react-scroll';
import InputError from '@/Components/InputError';
const Step4 = () => {
    const dispatch=useDispatch();
    const errors=useSelector(state=>state.calculatorSlice.errors)
    const data=useSelector(state=>state.calculatorSlice.data)
    const handleGender=(e)=>{
        dispatch(setData({"gender":e.target.value}))
    }
    useEffect(()=>{
        let scroller = Scroll.scroller;
        scroller.scrollTo('steps')
    },[])
    useEffect(()=>{
        let scroller = Scroll.scroller;
        scroller.scrollTo('steps')
    },[errors])
  return (
    <div>
        <div className='text-center'>
            <h2 className='font-bold text-start text-xl'>
                Veuillez sélectionner votre genre afin que nous puissions calculer vos besoins en calories.
            </h2>
        </div>
        <div className='mt-5'>
            <div className="flex">
                <div className="flex items-center">
                    <input defaultChecked={data?.gender === "homme" } onChange={handleGender} id="homme" type="radio" value="homme" name="sexe" className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-0" />
                    <label htmlFor="homme" className="ml-2 text-sm font-medium text-gray-900">Homme</label>
                </div>
                <div className="flex items-center ml-5">
                    <input defaultChecked={data?.gender === "femme" } onChange={handleGender} id="femme" type="radio" value="femme" name="sexe" className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-0" />
                    <label htmlFor="femme" className="ml-2 text-sm font-medium text-gray-900">Femme</label>
                </div>
            </div>
            <InputError message={errors?.gender}  className="mt-2 text-start" />

            <h2 className='text-start font-bold text-xl mt-3 mb-5'>
                Quelle est votre date de naissance ?
            </h2>
            <MaterialUIPickers />
            <h2 className='text-start font-bold text-xl mt-3 mb-5'>
                Où habitez-vous ?
            </h2>
            <Ville />
        </div>
    </div>
  )
}

export default Step4
