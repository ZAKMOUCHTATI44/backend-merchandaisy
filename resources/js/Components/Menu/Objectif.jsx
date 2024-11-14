import { setFilters } from '@/features/Filter/FilterSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const Objectif = () => {
    let [plansFilter,setPlansFilter] = useState([])
    const dispatch=useDispatch()
    const objectifs=["Prise de masse","Perte de poids","Maintenance"]
    const handleChange=(e)=>{
        setPlansFilter(e.target.value)
        dispatch(setFilters({'plans':plansFilter}))
    }
  return (
    <div className='mt-2 pr-3 border-b border-black py-5'>
        <div className="flex items-center justify-between">
            <h5 className='text-primary font-bold'>
                Voir d'autres plans
            </h5>
        </div>
        <div className="mt-5">
            {objectifs.map((objectif)=>(
                <div className="flex items-center mb-2" key={objectif}>
                    <input id={objectif} value={objectif} name="objectif" type="radio" className="w-4 h-4 focus:ring-0 focus:shadow-none inputCategroy" onChange={handleChange} />
                    <label htmlFor={objectif} className=" ml-2 text-gray- block mb-1 text-sm font-semibold">{objectif}</label>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Objectif
