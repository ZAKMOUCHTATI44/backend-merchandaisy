import App from '@/Layouts/App'
import React, { useState } from 'react'
import Logo from "../../../images/logo.png"
import "../../../css/Calculator.css"
import Form from './From'
import { useDispatch, useSelector } from 'react-redux';
import { clearObj, setErrors } from '@/features/calculatorSlice'
import { Inertia } from '@inertiajs/inertia'
import moment from 'moment'
import { Head } from '@inertiajs/inertia-react'
import axios from 'axios'


const Calculator = (props) => {
    const steps = ["1", "2", "3", "4","5","6"];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    const dispatch=useDispatch()
    const data=useSelector(state=>state.calculatorSlice.data)

    const stepMore=(data)=>{
        dispatch(clearObj())
        switch (currentStep) {
            case 2:
                if(!data.objectif) {
                   return dispatch(setErrors({'objectif':'Veuillez choisir un objectif .'}))
                }
                break;
            case 3:
                if(!data.activite) {
                   return dispatch(setErrors({'activite':`Veuillez choisir le niveau de votre d'activité .`}))
                }
                break;
            case 4:
                if(!data.gender) {
                   return dispatch(setErrors({'gender':`Veuillez choisir votre Sexe .`}))
                }
                if( !data.brithday ){
                   return dispatch(setErrors({'brithday':`Veuillez indiquer une date de naissance valide`}))
                }else if(data.brithday > moment(new Date()).format("Y-M-D")) {
                    return dispatch(setErrors({'brithday':`Veuillez indiquer une date de naissance valide`}))
                }
                if( !data.ville ){
                    return dispatch(setErrors({'ville':`Veuillez choisir votre Secteur .`}))
                 }
                break;
            case 5:
                if(!data.taille) {
                    return dispatch(setErrors({'taille':`Veuillez indiquer votre taille.`}))
                }else if( ! /^\d+$/.test(data.taille)) {
                    return dispatch(setErrors({'taille':`Veuillez indiquer votre taille.`}))
                }
                if(!data.poids) {
                    return dispatch(setErrors({'poids':`Veuillez indiquer une valeur valide pour le poids. `}))
                }else if( ! /^\d+$/.test(data.poids)) {
                    return dispatch(setErrors({'poids':`Veuillez indiquer une valeur valide pour le poids. `}))
                }
                if(!data.objectifPoids) {
                    return dispatch(setErrors({'objectifPoids':`Veuillez indiquer une valeur valide pour l'objectif de poids.`}))
                }else if( ! /^\d+$/.test(data.objectifPoids)) {
                    return dispatch(setErrors({'objectifPoids':`Veuillez indiquer une valeur valide pour l'objectif de poids.`}))
                }
                break;
            case 6 :{
                if( !data.firstname ){
                    return dispatch(setErrors({'firstname':`Ce champ est obligatoire`}))
                }
                if( !data.lastname ){
                    return dispatch(setErrors({'lastname':`Ce champ est obligatoire`}))
                }
                if( !data.email ){
                    return dispatch(setErrors({'email':`Ce champ est obligatoire`}))
                }else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)
                    ) {
                    return dispatch(setErrors({'email':`L'email n'est pas valide.`}))
                }
                if( !data.phone ){
                    return dispatch(setErrors({'phone':`Ce champ est obligatoire`}))
                }
                break;
            }
            default:
                break;
        }
      if(currentStep === steps.length){
        setComplete(true)
        axios.post('/calculator',data)
      }else {
        setCurrentStep((prev) => prev + 1);
      }
    }

    const stepBack=()=>{
      if(currentStep !== 1) {
        setCurrentStep((prev) => prev - 1);
        setComplete(false)
      }

    }
  return (
    <App>
        <Head>
         <title> Calculateur </title>
         <meta head-key="pagename" name="pagename" content="calculateur" />
        </Head>
        <div className='relative'>
            <div className='py-40 bannerCalcul'>
                <img src={Logo} width="260px" className='mx-auto' />
            </div>
        </div>
        <div className='boxCalculator  flex flex-col justify-between items-center' id='steps'>
                <div className="grid grid-cols-6 w-full">
                    {steps?.map((step, i) => (
                    <div key={i}  className={`stepItem ${currentStep === i + 1 && "stepItemActive"} ${
                            (i + 1 < currentStep || complete) && "completeItem"
                        } `}>
                    </div>
                    ))}
                </div>
                <div className="content px-5 py-12 text-center">
                    <Form step={currentStep} complete={complete} errors={props.errors}/>
                    <button
                            className={` ${currentStep == 1 ? "w-11/12 mt-5" : "hidden" } bg-primary text-white py-2 `}
                            onClick={stepMore}
                        >
                        CONTINUER
                    </button>
                </div>
                    { currentStep === 4 && (
                        <p className='px-5 mb-3 mt-5 text-center text-gray-400'>
                          Nous nous servons de ces informations pour calculer l'objectif calorique qui vous convient.
                        </p>
                    ) }
                <div className="flex justify-around w-full mb-8">
                    { currentStep !==1 && !complete  && (
                    <button className="border border-primary text-primary py-2 w-1/2 ml-8 mr-1" onClick={stepBack} >
                        RETOUR
                    </button>
                    )}

                    {!complete  && (
                        <button
                            className={` ${currentStep !== 1 ? "w-1/2 ml-1 mr-8" : "hidden" } bg-primary text-white py-2 `}
                            onClick={()=> stepMore(data)}
                        >
                        {currentStep === steps.length ? "Obtenir le résultat" : "CONTINUER"}
                        </button>
                    )}
                </div>
        </div>
    </App>
  )
}

export default Calculator
