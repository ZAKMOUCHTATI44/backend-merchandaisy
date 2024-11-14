import { setFilters } from '@/features/Filter/FilterSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const BannerMenu = () => {
    const dispatch=useDispatch()
    const [keyword,setKeyword]=useState('')
    const handleChange=(e)=>{
        setKeyword(e.target.value)
        dispatch(setFilters({'name':e.target.value}))
    }
  return (
    <div className='py-36 bannerMenu'>
        <h2 className='text-white text-center text-4xl font-extrabold'>
            Découvrez le vrai goût du succès.
        </h2>
        <form className='w-11/12 lg:w-1/2 mx-auto mt-5'>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input onChange={handleChange} value={keyword} type="search" id="default-search" className="block w-full p-4 pr-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:outline-none focus:ring-0" required />
            </div>
        </form>
    </div>
  )
}

export default BannerMenu
