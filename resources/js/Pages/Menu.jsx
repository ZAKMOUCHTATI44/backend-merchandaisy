import BannerMenu from '@/Components/Menu/BannerMenu'
import Card from '@/Components/Menu/Card'
import CardMobile from '../Components/Menu/CardMobile'
import Filters from '@/Components/Menu/Filters'
import { useProductsFiltersQuery } from '@/features/Filter/filterApi'
import App from '@/Layouts/App'
import { usePage } from '@inertiajs/inertia-react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { setFilters } from '@/features/Filter/FilterSlice'
import { useMemo } from 'react'
import { Head } from '@inertiajs/inertia-react';
import imgNotFound from "../../images/empty.svg"


const Menu = (props) => {
    const { categories } = usePage().props;
    const filters = useSelector(state=>state.filters.filters)
    let { data, error, isLoading} = useProductsFiltersQuery(filters)
    const dispatch=useDispatch()
    const loadMore = (filters) => {
        const toSkip = filters.skip + filters.limit;
        dispatch(setFilters({'skip':toSkip}))
    }
  return (
    <App>
        <Head>
         <title> Menu </title>
         <meta name="pagename" content="menu" />
        </Head>
        <BannerMenu />
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="col-span-1 relative">
                   <Filters categories={categories} />
                </div>
                <div className="col-span-3">
                    <div className='lg:grid lg:grid-cols-3 block lg:gap-5 my-12 justify-center'>
                        { isLoading ?(
                            <>
                                <h1>
                                    Loading
                                </h1>
                            </>
                        ) : (
                            <>
                            {data.products.length > 0 ? (
                            <>
                             {data.products.map((product)=>(
                                <div key={product.id}>
                                    <div className='hidden lg:block'>
                                        <Card product={product} />
                                    </div>
                                    <div className='block lg:hidden'>
                                        <CardMobile item={product} />
                                    </div>
                                </div>
                            ))}
                            </>
                            ):
                            <>
                            <div className="col-span-3">
                                <img src={imgNotFound} className="ml-auto mt-5" alt="" />
                            </div>
                            </>
                            }

                            </>
                        )}
                    </div>
                </div>

            </div>
        </div>
    </App>
  )
}

export default Menu
