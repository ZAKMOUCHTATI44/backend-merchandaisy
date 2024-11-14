import React from 'react'
import guy from "../../../images/About/guy.webp"

const AboutUs = () => {
  return (
    <div>
        <div className="container mx-auto my-24">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="guy-image">
                    <img src={guy} />
                </div>
                <div className='px-5'>
                    <h2 className="text-primary text-4xl font-bold">
                        About Us
                    </h2>
                    <h3 className="text-3xl font-extrabold mt-5">
                        Faisons connaissance !
                    </h3>
                    <p className='mt-5'>
                        <span className="font-bold mr-1">
                            ProFit™
                        </span>
                    est une petite équipe avide de bonne cuisine. Notre équipe a vu le jour suite à la rencontre de nos deux fondateurs, Ghita El Oualydy et Karim Benchekroun, tous deux
                        <span className="font-bold ml-1">
                            passionnés de bien-être.
                        </span>
                    </p>
                    <p className="mt-5">
                        Nous avons la certitude que
                        <span className="font-bold mx-1">
                            le bien-être physique amène au bien-être mental,
                        </span>
                         Nous avons pour ambition de développer une communauté passionnée et motivée avec un seul et même objectif,
                            <span className="font-bold mx-1">
                           le succès !
                        </span> <br />
                        Nous nous sommes engagés à toujours être à l’écoute de vos besoins et de vous accompagner tout au long de vos objectifs en vous livrant
                        <span className="font-bold mx-1">
                            des plats savoureux et sur mesure.
                        </span>
                    </p>
                    <p className="mt-5">
                        Nous voulons aussi communiquer sur des valeurs qui nous tiennent à cœur telles que la discipline, l’équilibre, le partage et le travail.
                    </p>
                    <p className="mt-5">
                        <span className="font-bold mx-1">
                            Tout est dans votre assiette !
                        </span>
                        Les nutriments nécessaires dont votre corps à besoin ont aussi un impact
                        important sur votre système nerveux,
                        et par conséquent votre
                        <span className="font-bold mx-1">
                           humeur
                        </span>
                          et
                        <span className="font-bold mx-1">
                          énergie
                        </span>
                          quotidienne.
                        C’est pour cela que nous avons développé
                        <span className="font-bold mx-1">
                            ProFit™,
                        </span>
                        avec la conviction que tout commence par une bonne
                        alimentation et de l’exercice physique.
                        Prenez soin de vous, et donnez vous les moyens de vous surpasser et
                        de réussir tous vos objectifs.
                        <span className="font-bold mx-1">
                            ProFit™ croit en vous.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
