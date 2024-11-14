import React from 'react'
import timeFast from "../../../images/icons/time-fast.svg"
import moment from 'moment';


const BannerDesc = ({blog}) => {
  return (
    <div className='bg-gray-600 text-center py-12'>
        <div className="w-1/2 mx-auto">
            <h1 className='text-5xl text-white'>
                {blog.title}
            </h1>
            <div className='text-white flex m-5 justify-center'>
                {moment(blog.created_at).format("d.M.YY")}
                <img src={timeFast} width="15px" className='mx-2' />
                {blog.time_of_read}
            </div>
            <img src={blog.picture} className="w-full" />
        </div>
    </div>
  )
}

export default BannerDesc
