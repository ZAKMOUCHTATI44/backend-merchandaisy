import React from 'react'
import women from "../../../images/About/profit-guy.png"

const Profit = () => {
  return (
    <div>
        <div className="container mx-auto">
            <div className="block lg:flex justify-end items-center relative">
                <p className='uppercase absolute text-9xl lg:text-9xl left-0 lg:-right-5 font-extrabold -z-10 top-5' style={{color:"rgb(230, 230, 230)"}}>
                    bien être
                </p>
                <div className="w-full lg:w-1/2 ">
                    <h2 className="font-extrabold text-5xl">
                        Une meilleure santé <br /> pour une meilleure vie.
                    </h2>
                    <p className="text-md mt-5">
                        Parce que notre mission est de créer un environnement propice
                        au bien être où chacun de nous y trouve ses marques pour se surpasser, et parce que l'équilibre est la clé du succès. ProFit™ vous facilite la vie et vous accompagne tout au long de votre ascension !
                    </p>
                </div>
                <div className="women w-full lg:w-1/2">
                    <img src={women} className="w-full ml-auto" alt="" srcSet="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profit
