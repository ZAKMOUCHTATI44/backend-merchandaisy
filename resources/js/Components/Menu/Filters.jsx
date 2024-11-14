import React, { useEffect } from 'react'
import Objectif from './Objectif'
import MenuCategory from './MenuCategory'
import RangePrice from './RangePrice'

const Filters = ({categories}) => {
  return (
    <div className='pt-12 mt-12 px-5 lg:pr-5 '>
        <h2 className="flex items-center border-b border-black pb-2">
            <span className="material-symbols-outlined">delete</span>
            <span className='ml-2'>
                Effacer tout
            </span>
        </h2>
        <h2 className="flex items-center mt-5">
            <span className="material-symbols-outlined">tune</span>
            <span className='ml-2'>
                Filter par
            </span>
        </h2>

        <RangePrice />
        <MenuCategory categories={categories} />
        <Objectif />
    </div>
  )
}

export default Filters
