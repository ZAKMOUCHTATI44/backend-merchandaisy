import InputError from '@/Components/InputError';
import { setData } from '@/features/calculatorSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Scroll from 'react-scroll';

const Step2 = () => {
    const dispatch=useDispatch()
    const errors=useSelector(state=>state.calculatorSlice.errors)
    const data=useSelector(state=>state.calculatorSlice.data)
    const handleChange=(e)=>{
        dispatch(setData({"objectif":e.target.value}))
    }
    useEffect(()=>{
        let scroller = Scroll.scroller;
        scroller.scrollTo('steps')
    },[])
  return (
    <div className='text-center'>
        <h2 className='font-bold text-xl'>Quel est votre objectif de poids ?</h2>
        <InputError message={errors?.objectif}  className="mt-2" />
        <ul className="flex flex-col mt-5">
            <li className="relative">
                <input defaultChecked={data?.objectif === "perdre-du-poids" } onChange={handleChange} className="sr-only peer" type="radio" value="perdre-du-poids" name="objectif" id="perdre-du-poids" />
                <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="perdre-du-poids">
                    Perdre du poids
                </label>
                <div className="absolute w-5 h-5 top-5 right-3">
                </div>
            </li>
            <li className="relative my-3">
                <input defaultChecked={data?.objectif === "maintenir-poids" } onChange={handleChange} className="sr-only peer" type="radio" value="maintenir-poids" name="objectif" id="maintenir-poids" />
                <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="maintenir-poids">
                    Maintenir poids
                </label>
                <div className="absolute w-5 h-5 top-5 right-3">
                </div>
            </li>
            <li className="relative">
                <input defaultChecked={data?.objectif === "prendre-du-poids" } onChange={handleChange} className="sr-only peer" type="radio" value="prendre-du-poids" name="objectif" id="prendre-du-poids" />
                <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor="prendre-du-poids">
                    Prendre du poids
                </label>
                <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Step2
