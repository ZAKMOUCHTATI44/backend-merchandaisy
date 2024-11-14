import AboutUs from '@/Components/About/AboutUs'
import BannerAbout from '@/Components/About/BannerAbout'
import Profit from '@/Components/About/Profit'
import App from '@/Layouts/App'
import { Head } from '@inertiajs/inertia-react'
import React from 'react'

const About = () => {
  return (
    <App>
        <Head>
         <title> A propos de nous </title>
         <meta head-key="pagename" name="pagename" content="about" />
        </Head>
        <BannerAbout />
        <AboutUs />
        <Profit />
    </App>
  )
}

export default About
