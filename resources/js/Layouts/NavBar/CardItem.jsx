import { decQte, incQte, removeProduct } from '@/features/cartSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

const CardItem = ({product}) => {
    const dispatch=useDispatch()
    const deleteProduct=(e)=>{
        dispatch(removeProduct(e))
    }

    const decrementQte=(id,qte)=>{
        if(qte == 1) {
            // dispatch(removeProduct(id))
        }else {
            dispatch(decQte(id))
        }
    }


  return (
    <div className='flex items-center justify-between my-5'>
        <div className="img">
            <img src={product.image} width="80px" height="80px" alt="" />
        </div>
        <div className="desc ml-2" style={{'width':"-webkit-fill-available"}}>
            <h6>
                {product.title}
            </h6>
            <div className='flex items-center'>
                <p className='text-gray-500'>
                    {product.price} MAD
                </p>
                <div>
                <div className="flex items-center ml-5">
                    <button className="flex items-center justify-center" onClick={()=>{ decrementQte(product.id,product.qteCart) }  }>
                        <span style={{ cursor:"pointer" }} className="material-symbols-outlined">do_not_disturb_on</span>
                    </button>
                    <span className='mx-2'>
                        {product.qteCart}
                    </span>
                    <button className="flex items-center justify-center" onClick={()=>{ dispatch(incQte(product.id)) }}>
                        <span style={{ cursor:"pointer" }} className="material-symbols-outlined">add_circle</span>
                    </button>
                </div>
                </div>
            </div>
        </div>
        <div>
            <button onClick={()=>{deleteProduct(product.id)}}>
                <span className="material-symbols-outlined">delete</span>
            </button>
        </div>

    </div>
  )
}

export default CardItem
