import { setFilters } from '@/features/Filter/FilterSlice';
import { useEffect, useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import { useDispatch } from 'react-redux';
import '../../../css/RangePrice.css';

export default function () {
  let [range, setRange] = useState([0, 1000])
  const dispatch=useDispatch();
    const setPrice=()=>{
        dispatch(setFilters({ "price": range }))
    }
  return (
    <>
      <div className='mt-2 pr-3 border-b border-black py-5'>
            <h5 className='text-primary font-bold'>
                Prix
            </h5>
            <p className='my-3 font-semibold'>
            Choissiez votre fourchette
            </p>
            <RangeSlider min={0} max={200} step={5} defaultValue={[0, 200]} onInput={(e) => setRange(e)} />
            <p className='mt-5'>
                {range[0]} MAD - {range[1]} MAD
            </p>
            <button className='bg-primary py-1 px-5 text-white mt-3 w-full' onClick={setPrice}>
                Filter
            </button>
      </div>
    </>
  );
}
