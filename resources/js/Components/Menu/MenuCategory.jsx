import { setFilters } from '@/features/Filter/FilterSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const MenuCategory = ({categories}) => {
    let [categoriesFilter,setCategoriesFilter] = useState([])
    const dispatch=useDispatch();

    const handleChange=(e)=>{
        let item = categoriesFilter.find((item) => item === e.target.value )
        if( item ) {
            setCategoriesFilter(categoriesFilter.filter((item) => item !== e.target.value ))
        } else {
            setCategoriesFilter([...categoriesFilter,e.target.value])
        }
    }
    useEffect(()=>{
        dispatch(setFilters({"categories":categoriesFilter}))

    },[categoriesFilter])
  return (
    <div className='mt-5 pr-3 border-b border-black py-5'>
        <div className="flex items-center justify-between">
            <h5 className='text-primary font-bold'>
                Menu
            </h5>
            <p>
               {categoriesFilter.length} Sélectionné
            </p>
        </div>

        <div className="mt-5 lg:block flex justify-around">
            {categories.map((category)=>(
                <div className="flex items-center lg:justify-start justify-around mb-2" key={category.id}>
                        <div className="bg-black h-12 w-12 rounded-full p-1 lg:hidden">
                            <img src={category.image} alt="" />
                        </div>
                    <input id={category.id} value={category.id}  type="checkbox" className="w-4 h-4 focus:ring-0 focus:shadow-none inputCategroy lg:block hidden" onChange={handleChange} />
                    <label htmlFor={category.id} className=" ml-2 mb-1 text-sm font-semibold lg:block hidden">{category.name}</label>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MenuCategory
