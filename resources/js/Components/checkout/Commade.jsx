import { addErrors, setNull } from '@/features/orderSlice'
import CardItem from '@/Layouts/NavBar/CardItem'
import { Inertia } from '@inertiajs/inertia'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputError from '../InputError'

const Commade = () => {
    const [promoCode,setPromoCode]=useState()
    const [errors,setErrors] = useState();
    const [discount,setDiscount] = useState()
    const items = useSelector(state=>state.cart.cart)
    const info = useSelector(state=>state.orderSlice.info)
    const dispatch=useDispatch()

    const totalCheckout=() => {
        return items.reduce((total,item)=>total + (item.price * item.qteCart ),0)
    }
    const calcultPromo=()=>{
        if ( discount ) {
           return Math.floor((totalCheckout() + 15 ) / 100 * Math.floor(discount.discount))
        }else {
            return 0;
        }
    }
    const getTheCode=()=>{
        axios.get(`/checkpromocode/${promoCode}`)
        .then(res=>{
            console.log(res)
            setDiscount(res.data.promo)
            setErrors()
        })
        .catch(err=>{
            console.log("Invalide Code Promo")
            setErrors({codePromo:"Invalide Code Promo"})
            setDiscount()
        })
    }


    const commandeStore = (info) =>{

        let errors={}
        if( ! info?.lastname) {
            errors.lastname="Ce champ est obligatoire"
        }
        if( ! info?.firstname) {
            errors.firstname="Ce champ est obligatoire"
        }
        if (!info?.email) {
            errors.email = 'Ce champ est obligatoire';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(info.email)){
            errors.email = `L'email n'est pas valide.`;
        }
        if( ! info?.phone) {
            errors.phone="Ce champ est obligatoire"
        }
        if( ! info?.ville) {
            errors.ville="Ce champ est obligatoire"
        }
        if( ! info?.adresse) {
            errors.adresse="Ce champ est obligatoire"
        }
        if(JSON.stringify(errors) !== '{}') {
            dispatch(addErrors(errors))
        }else {
            dispatch(setNull())
            Inertia.post("/checkout",{user:info,discount,items})
        }

    }
   return (
    <div className='px-5'>
        <h3 className='font-semibold text-2xl mt-3 lg:mt-0'>
            Votre commande
        </h3>
        {items.map(product=>(
            <div key={product.id} className='flex items-center justify-between my-5'>
                <div className="img relative">
                    <span className='absolute bg-primary text-white text-center top-0 right-0 rounded-full w-6 h-6'>
                        { product.qteCart }
                    </span>
                    <img src={product.image} width="80px" height="80px" alt="" />
                </div>
                <div className="desc ml-2" style={{'width':"-webkit-fill-available"}}>
                    <h6>
                        {product.title}
                    </h6>
                    <div>
                        <div className="flex py-2">
                            <p className='text-center text-gray-500'>{product.prot} g Prot </p>
                            <p className='text-center text-gray-500 mx-5'>{product.carbs} g Carbs</p>
                            <p className='text-center text-gray-500'>{product.fat} g Fat</p>
                            <p className='text-center text-gray-500 mx-5'>{product.kcal} g Cal</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-end'>
                        <p className='text-black'>
                            {product.price} MAD
                        </p>
                    </div>
                </div>
            </div>
        ))}
        <div>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="promo-code">Code de Promo</InputLabel>
          <OutlinedInput
            id="promo-code"
            type='text'
            onChange={(e)=>{setPromoCode(e.target.value)}}
            endAdornment={
              <InputAdornment position="end">
                <button onClick={getTheCode}>
                    <span className='text-sm'>
                        Appliquer le code promo
                    </span>
                </button>
              </InputAdornment>
            }
            label="code de promo"
          />
        <InputError message={errors?.codePromo} className="mt-2" />
        </FormControl>
        </div>
        <div>
            <div className="flex justify-between py-5">
                <h5 className="font-semibold">
                    Liste des prix
                </h5>
                <p>
                    { totalCheckout() } MAD
                </p>
            </div>
            <hr />
            <div className="flex justify-between py-5">
                <h5 className="font-semibold">
                    Livraison
                </h5>
                <p>
                    15 MAD
                </p>
            </div>
            {discount && (
                <>
                    <hr />
                    <div className="flex justify-between py-5">
                        <h5 className="font-semibold">
                            Discount
                        </h5>
                        <p>
                           - { calcultPromo() } MAD
                        </p>
                    </div>
                </>
            )}
            <hr />
            <div className="flex justify-between py-5">
                <h5 className="font-semibold">
                    Total
                </h5>
                <p>
                    { totalCheckout() + 15 - calcultPromo() } MAD
                </p>
            </div>

        </div>
        <button onClick={()=> commandeStore(info)} className='w-full block text-center bg-primary text-white py-3 px-5 my-3 border border-primary outline-none hover:bg-white hover:text-black'>
			Poursuivre ma commande
        </button>
    </div>
  )
}

export default Commade
