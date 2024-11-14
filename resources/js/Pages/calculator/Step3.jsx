import InputError from '@/Components/InputError';
import { setData } from '@/features/calculatorSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Scroll from 'react-scroll';
const Step3 = () => {
    const dispatch=useDispatch()
    const options=[
        {
            title:"Pas très actif",
            content:"Vous passez la plupart du temps assis (p. ex. : guichetier, emploi de bureau)",
            power:1.2
        },
        {
            title:"Modérément actif",
            content:"Vous passez presque toute la journée debout (p. ex. : enseignant, vendeur)",
            power:1.375
        },
        {
            title:"Actif",
            content:"Vous passez la majeure partie de la journée à faire de l'activité physique (par exemple : serveur, facteur)",
            power:1.55
        },
        {
            title:"Très actif",
            content:"Vous passez une bonne partie de la journée à faire des exercices très physiques (p.ex. : coursier à vélo, charpentier).",
            power:1.725
        }
    ]
    const handleChange=(e)=>{
        dispatch(setData({"activite":e.target.value}))
    }
    const errors=useSelector(state=>state.calculatorSlice.errors)
    const data=useSelector(state=>state.calculatorSlice.data)

    useEffect(()=>{
        let scroller = Scroll.scroller;
        scroller.scrollTo('steps')
    },[])
    useEffect(()=>{
        let scroller = Scroll.scroller;
        scroller.scrollTo('steps')
    },[errors])


  return (
    <div className=''>
        <div className='text-center'>
            <h2 className='font-bold text-xl'>
                Quel est ton niveau d'activité fondamental?
            </h2>
            <p className='text-md'>
            À l'exclusion des séances d'entraînement (elles sont calculées séparément)
            </p>
            <InputError message={errors?.activite}  className="mt-2" />

        </div>
        <div className="f mt-5">
            <ul className="flex flex-col mt-5">
            {options.map(option=>(
                <li className="relative my-2" key={option.title}>
                <input defaultChecked={data?.activite == option.power } onChange={handleChange} className="sr-only peer" type="radio" value={option.power} name="answer" id={option.title} />
                <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" htmlFor={option.title}>
                    <div>
                        <h5 className='text-md text-gray-500 text-start'>
                            {option.title}
                        </h5>
                        <p className='text-start'>
                            {option.content}
                        </p>
                    </div>
                </label>
                <div className="absolute w-5 h-5 top-5 right-3">
                </div>
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default Step3
