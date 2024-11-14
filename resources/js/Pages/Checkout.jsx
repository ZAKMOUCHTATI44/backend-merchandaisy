import Main from '@/Components/checkout/Main'
import App from '@/Layouts/App'
import { Head } from '@inertiajs/inertia-react'
import React from 'react'

const Checkout = () => {
  return (
    <App>
        <Head title="Checkout" />
        <Main />
    </App>
  )
}

export default Checkout
