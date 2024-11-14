import React from 'react'
import { Head } from '@inertiajs/inertia-react';
import App from '@/Layouts/App';
import Header from '@/Components/Header';
import JeProfite from '@/Components/JeProfite';
import Objectif from '@/Components/Objectif';
import Cooking from '@/Components/Cooking';
import Banner from '@/Components/Banner';
import Athlete from '@/Components/Athlete';
import Blog from '@/Components/Blog';

const Home = (props) => {
  return (
    <>
        <Head>
         <title> Accueil </title>
         <meta head-key="pagename" name="pagename" content="home" />
        </Head>
        <App auth={props.auth}>
           <Header />
           <JeProfite />
           <Objectif />
           <Cooking />
           <Banner />
           <Athlete />
           <Blog />
        </App>
    </>
  )
}

export default Home
