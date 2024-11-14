import React from 'react'
import cooking from "../../images/cooking.webp"
import taskDone from "../../images/icons/task_alt_green.svg"


const Cooking = () => {
  return (
    <div className="container mx-auto my-24">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <div className="desc px-6 lg:px-12 col-span-2">
            <p className='text-primary font-bold text-4xl'>
                Nous vous préparons bien plus que des plats.
            </p>
            <div className='img  mr-auto block my-5 lg:hidden'>
                <img src={cooking} alt="cooking profit" width="100%"/>
            </div>
            <p className='mt-5'>
                <span  className="font-extrabold mr-2">
                    ProFit™
                </span>
                ne fait pas que préparer des plats, nous attachons aussi beaucoup d’importance à nos valeurs, que nous partageons fermement avec nos clients.
            </p>
            <p className='mt-5 text-sm'>
                Des ingrédients de qualité méritent une préparation de qualité. Nos viandes et produits sont livrés quotidiennement, lavés, coupés et transformés en respectant toutes les normes d’hygiène et règles sanitaires imposées.
            </p>
            <p className='mt-5 text-sm'>
                Pour emballer de manière responsable, il est important de concevoir un packaging écologique,
                <span  className="font-extrabold mx-2">ProFit™</span>
                prend soin de son environnement et utilise des emballages biodégradables à 100%
            </p>
            <p className='font-extrabold mt-5 text-sm'>
                Nous accordons énormément d’attention à la qualité de nos produits pour vous offrir les plats les plus sains possible, car ce que vous manger aujourd’hui détermine les pathologies de demain.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 mt-5">
                <div className="left">
                    <div className='flex items-center'>
                        <img src={taskDone} alt="taskDone" width="25px"/>
                        <p className='ml-2 text-sm'>
                            Produits frais
                        </p>
                    </div>
                    <div className='flex items-center'>
                        <img src={taskDone} alt="taskDone" width="25px"/>
                        <p className='ml-2 my-3 text-sm'>
                            100% Naturel
                        </p>
                    </div>
                    <div className='flex items-center'>
                        <img src={taskDone} alt="taskDone" width="25px"/>
                        <p className='ml-2 text-sm'>
                            Faible en sucre
                        </p>
                    </div>
                </div>
                <div className="left">
                    <div className='flex items-center'>
                        <img src={taskDone} alt="taskDone" width="25px"/>
                        <p className='ml-2 text-sm'>
                            Faible en sodium
                        </p>
                    </div>
                    <div className='flex items-center'>
                        <img src={taskDone} alt="taskDone" width="25px"/>
                        <p className='ml-2 my-3 text-sm'>
                            Sans OGM
                        </p>
                    </div>
                    <div className='flex items-center'>
                        <img src={taskDone} alt="taskDone" width="25px"/>
                        <p className='ml-2 text-sm'>
                            Sans Gluten
                        </p>
                    </div>
                </div>
                <div className="left lg:my-0 my-3">
                    <div className='flex items-center'>
                        <img src={taskDone} alt="taskDone" width="25px"/>
                        <p className='ml-2 text-sm'>
                            Pêche sauvage
                        </p>
                    </div>
                    <div className='flex items-center'>
                        <img src={taskDone} alt="taskDone" width="25px"/>
                        <p className='ml-2 text-sm my-3'>
                            Protéines végétales
                        </p>
                    </div>
                    <div className='flex items-center'>
                        <img src={taskDone} alt="taskDone" width="25px"/>
                        <p className='ml-2 text-sm'>
                            Viandes sans additifs
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='img  mr-auto hidden lg:block'>
            <img src={cooking} alt="cooking profit" width="100%"/>
        </div>
    </div>
</div>
  )
}

export default Cooking
