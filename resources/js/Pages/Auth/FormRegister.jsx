import React from 'react'
import { Formik } from 'formik';
import { Inertia } from '@inertiajs/inertia';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import { Link } from '@inertiajs/inertia-react';

const FormRegister = (props) => {
    console.log(props)
  return (
    <Formik
    validateOnChange={false}
    validateOnBlur={false}
    initialValues={{ firstname:'',lastname:'',email: '', password: '',password_confirmation:'' }}
    validate={values => {
        const errors = {};
        if (!values.firstname) {
            errors.firstname = 'Ce champ est obligatoire';
        }
        if (!values.lastname) {
            errors.lastname = 'Ce champ est obligatoire';
        }
        if (!values.email) {
        errors.email = 'Ce champ est obligatoire';
        } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
        errors.email = `L'email n'est pas valide.`;
        }
        if (!values.password) {
            errors.password = 'Ce champ est obligatoire';
        }else if ( !values.password_confirmation ) {
            errors.password_confirmation="Ce champ est obligatoire"
        }else if ( values.password !== values.password_confirmation ) {
            errors.password_confirmation="Ces mots de passe ne correspondent pas. Veuillez réessayer."
        }

        return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
        Inertia.post('/register',values)
    }}
>
    {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
    }) => (
    <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
            <div>
                <InputLabel forInput="name" value="Nom" />
                <div className="flex flex-col items-start">
                    <input
                        type="text"
                        name="firstname"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm mt-1 block w-full"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstname}
                    />
                </div>
                <InputError message={errors.firstname}  className="mt-2" />
            </div>
            <div>
                <InputLabel forInput="firstname" value="Prénom" />
                <div className="flex flex-col items-start">
                    <input
                        type="text"
                        name="lastname"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm mt-1 block w-full"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastname}
                    />
                </div>
                <InputError message={errors.lastname} className="mt-2" />
            </div>
        </div>
        <div className="mt-4">
            <InputLabel forInput="email" value="Email" />
                <div className="flex flex-col items-start">
                    <input
                        type="email"
                        name="email"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm mt-1 block w-full"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                </div>
            <InputError message={errors.email} className="mt-2" />
            <InputError message={props.errors?.email} className="mt-2" />
        </div>
        <div className="mt-4">
            <InputLabel forInput="password" value="Mot de passe" />
            <div className="flex flex-col items-start">
                <input
                    type="password"
                    name="password"
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm mt-1 block w-full"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />
            </div>
            <InputError message={errors.password} className="mt-2" />
        </div>
        <div className="mt-4">
            <InputLabel forInput="password_confirmation" value="Confirmation de passe" />
            <div className="flex flex-col items-start">
                <input
                    type="password"
                    name="password_confirmation"
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm mt-1 block w-full"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password_confirmation}
                />
            </div>
            <InputError message={errors.password_confirmation} className="mt-2" />
        </div>
        <div className="flex items-center justify-end mt-4">
            <Link
                href={route('login')}
                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none"
            >
            Vous êtes déjà inscrit ?
            </Link>
        </div>
        <button type="submit" className="bg-primary w-full py-2 mt-5 text-white">
            Register
        </button>
    </form>
    )}
    </Formik>
  )
}

export default FormRegister
