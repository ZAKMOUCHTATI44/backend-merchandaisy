import { Link } from '@inertiajs/inertia-react'
import timeFast from "../../../images/icons/time-fast.svg"
import moment from 'moment';

const Nutrition = ({blogs}) => {
  return (
    <div className='my-24' id="Nutrition">
        <div className="container mx-auto px-5 lg:px-12">
            <h3 className="font-bold text-5xl">
                Nutrition
            </h3>
            <p className='mt-2 mb-5'>
                Tout savoir sur la nutrition
            </p>
            <div className="block lg:grid grid-cols-3 gap-5">
                {blogs.map((blog)=>(
                    <div key={blog.id} className="item relative pb-14 mb-5 lg:mb-0">
                        <div className="img-blog">
                            <img src={blog.picture} alt={blog.title} className="w-full" />
                        </div>
                        <div>
                            <div className='text-gray-500 flex m-5'>
                                {moment(blog.created_at).format("d.M.YY")}
                                <img src={timeFast} width="15px" className='mx-2' />
                                {blog.time_of_read}
                            </div>
                            <div className="desc-blog text-xl font-bold px-5 mt-5"  dangerouslySetInnerHTML={{__html: blog.title}}></div>

                            <Link href={`/blog/${blog.slug}`} className='absolute bottom-2 right-0 uppercase bg-primary mt-5 py-2 inline-block text-white px-16'>
                                lire plus
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Nutrition
