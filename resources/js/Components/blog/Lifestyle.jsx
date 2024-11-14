import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import timeFast from "../../../images/icons/time-fast.svg"
import moment from 'moment';

const Lifestyle = ({blogs}) => {
  return (
    <div className='my-24' id="Lifestyle">
        <div className="container mx-auto px-5 lg:px-12">
            <h3 className="font-bold text-5xl">
                Lifestyle
            </h3>
            <p className='mt-2 mb-5'>
                Vision Plus, le bien-être en plus
            </p>
            <div className="block lg:grid gap-5 grid-cols-3">
                {blogs.map((blog)=>(
                    <div key={blog.id} className="item relative pb-14">
                        <div className="img-blog">
                            <img src={blog.picture} className="w-full" />
                        </div>
                        <div className="">
                            <div className='text-gray-500 flex m-5'>
                                {moment(blog.created_at).format("d.M.YY")}
                                <img src={timeFast} width="15px" className='mx-2' />
                                {blog.time_of_read}
                            </div>
                            <div className="desc-blog text-xl font-bold px-5 mt-5">
                                {blog.title}
                            </div>
                            <Link href={`/blog/${blog.slug}`} className='absolute bottom-2 right-0 uppercase bg-primary mt-5 py-2 inline-block text-white px-16'>
                                lire plus
                            </Link>
                        </div>
                    </div>
                ))}
                <div className="col-span-2 bg-primary py-12 px-12 flex flex-col justify-center mt-5 lg:mt-0">
                    <div className="text-white border-l-4 pl-5 border-white text-3xl font-semibold">
                        c'est pour ceux qui veulent <br /> s'extraire de leur condition initiale,<br /> prendre une revanche et faire mentir leur destin
                    </div>
                    <div>
                        <Link href={`/blog/`} className='uppercase text-primary mt-5 py-2 inline-block text-white border bg-white px-16'>
                            lire plus
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lifestyle
