import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import App from '@/Layouts/App';
import Logo from "../../../images/logo.png"

import { Formik } from 'formik';
import { Inertia } from '@inertiajs/inertia';
import FormRegister from './FormRegister';

export default function Register(props) {
    return (
        <App>
            <Head title="Register" />
            <div className='py-40 bannerCalcul'>
                <img src={Logo} width="260px" className='mx-auto' />
            </div>
            <div className="w-2/6 mx-auto my-24">
                <FormRegister props={props} />
            </div>
        </App>
    );
}
