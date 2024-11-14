import React from 'react'
import women from "../../images/women.webp"
import taskDone from "../../images/icons/task_alt_FILL0_wght400_GRAD0_opsz48.svg"
import { Link } from '@inertiajs/inertia-react'

const Objectif = () => {
  return (
    <div>
        <div className="container mx-auto my-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <h2 className='font-extrabold text-5xl block lg:hidden px-6 lg:px-12 mb-5'>
                        Des repas pour tous les objectifs
                    </h2>
                <div className='img w-3/4 mx-auto'>
                    <img src={women} alt="Objectif Profit" width="100%"/>
                </div>
                <div className="desc px-6 lg:px-12">
                    <h2 className='font-extrabold text-5xl hidden lg:block'>
                        Des repas pour tous les objectifs
                    </h2>
                    <p className='text-primary font-bold text-xl mt-5'>
                        Nos plats s’adaptent à tous les challenges du quotidien et répondent à vos besoins spécifiques.
                    </p>
                    <p className='mt-5 text-sm'>
                    Du matin au soir, notre équipe s'engage à vous livrer des plats préparés sur mesure avec des ingrédients frais de la plus haute qualité.
                    </p>
                    <p className='mt-5 text-sm'>
                        Il peut être difficile d'obtenir la nutrition dont vous avez besoin, surtout lorsque vous êtes occupé. C'est pourquoi nous concevons nos plats pour optimiser votre temps, votre énergie et votre bien-être.
                    </p>
                    <p className='mt-5 text-sm'>
                        Obtenez des performances optimales dans chaque assiette grâce à des ingrédients biologiques de premier choix et à des aliments préparés rapidement pour que vous puissiez manger tout en vous dépensant. Il n'a jamais été aussi facile d'optimiser votre temps, de faire le plein d'énergie et de donner le meilleur de vous-même, un repas à la fois.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 mt-5">
                        <div className="left">
                            <div className='flex items-center'>
                                <img src={taskDone} alt="" width="25px"/>
                                <p className='ml-2 text-sm'>
                                    Rééquilibrer votre alimentation
                                </p>
                            </div>
                            <div className='flex items-center'>
                                <img src={taskDone} alt="" width="25px"/>
                                <p className='ml-2 text-sm my-3'>
                                    Surpasser vos objectifs sportifs
                                </p>
                            </div>
                            <div className='flex items-center'>
                                <img src={taskDone} alt="" width="25px"/>
                                <p className='ml-2 text-sm'>
                                    Économiser votre temps
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link  href="/about-us" className='bg-black inline-block w-full lg:w-auto px-8 py-2 text-white mt-5 uppercase'>
                        Régalez-vous !
                    </Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Objectif
