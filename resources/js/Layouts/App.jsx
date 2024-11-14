import React from 'react'
import Footer from './Footer'
import Nav from './NavBar/Nav'
import { Head, usePage } from '@inertiajs/inertia-react'
import favicon from '../../images/favicon.svg'


const App = ({children}) => {
    const { auth } = usePage().props
  return (
    <>
    <Head>
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <meta name="description" content="ProFit est un restaurant engagé qui propose des plats fraîchement cuisinés, approuvés par nos experts en nutrition, et personnalisables en macronutriments. Du zéro sucre au sans gluten, nous nous adaptons à toutes vos restrictions alimentaires tout en vous proposant de délicieux plats comme à la maison. ProFit™ est une petite équipe avide de bonne cuisine. Notre équipe a vu le jour suite à la rencontre de nos deux fondateurs, Ghita El Oualydy et Karim Benchekroun, tous deux passionnés de bien-être. Nous avons la certitude que le bien-être physique amène au bien-être mental, Nous avons pour ambition de développer une communauté passionnée et motivée avec un seul et même objectif, le succès ! Nous nous sommes engagés à toujours être à l’écoute de vos besoins et de vous accompagner tout au long de vos objectifs en vous livrant des plats savoureux et sur mesure." />
    </Head>
    <Nav auth={auth} />
        {children}
    <Footer />
    </>
  )
}

export default App
