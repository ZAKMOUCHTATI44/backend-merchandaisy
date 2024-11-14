import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/inertia-react';
import React from 'react'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
const Form = ({errors,step,complete}) => {
    const getForm=(step,complete,errors)=> {
        if(! complete) {
            switch (step) {
                case 1:
                    return (
                        <Step1 />
                    )
                    break;
                case 2:
                    return (
                        <Step2 />
                    )
                    break;
                case 3:
                    return(
                        <Step3 />
                    )
                    break;
                case 4:
                    return(
                        <Step4 />
                    )
                    break;
                case 5:
                    return (
                        <Step5 />
                    )
                    break;
                case 6:
                    return (
                        <Step6/>
                    )
                    break;
                default:
                    return (
                        <h1> Default Action </h1>
                    )
                break;
            }
        }else {
            return (
                <>
                    <h1 className='font-extrabold text-2xl'>
                        Félicitations
                    </h1>
                    <p className='my-5'>
                    Votre compte a été créé avec succès , Nous vous avons envoyé les résultats complets dans vos e-mails afin que vous puissiez les garder près de vous, comprendre vos besoins et faciliter votre cheminement vers vos objectifs.
                    </p>
                    <Link href='/menu' className='text-xl bg-primary text-white px-5 py-1 mt-5 blcok'>
                        Visiter Notre Menu
                    </Link>
                </>
            )
        }
    }
  return (
    <div className=''>
       {getForm(step,complete,errors) }
    </div>
  )
}

export default Form
