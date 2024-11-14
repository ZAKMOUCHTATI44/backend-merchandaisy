import Banner from '@/Components/Contact/Banner'
import Form from '@/Components/Contact/Form'
import Progress from '@/Components/Contact/Progress'
import App from '@/Layouts/App'
import { Head } from '@inertiajs/inertia-react'
import React from 'react'

const Contact = (props) => {
    console.log(props)
  return (
    <App>
        <Head>
         <title> Contact </title>
         <meta head-key="pagename" name="pagename" content="contact" />
        </Head>
        <Banner className="bannerContact"/>
        <Form />
    </App>
  )
}

export default Contact
