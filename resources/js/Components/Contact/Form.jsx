import { Inertia } from '@inertiajs/inertia';
import { Formik } from 'formik';
import React, { useState } from 'react'
import InputError from '../InputError';

const Form = () => {
    const [success,setSuccess]=useState('')
  return (
    <div className='mt-24'>
        <div className="container mx-auto">
            <h3 className='font-extrabold text-2xl'>
                Recommander. Demander. Commenter. Partager.
                <br />
                Dites-nous tout.
            </h3>
            <p className='text-xl mt-5' style={{ color:"rgb(140, 140, 140)" }}>
                Choisissez un profil parmi les options suivantes
                <br /> pour accéder à la demande associée.
            </p>
            <Formik
                    validateOnChange={false}
                    validateOnBlur={false}
                    initialValues={{email: '', object: '',message:'',profil:'client' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Ce champ est obligatoire';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ){
                            errors.email = `L'email n'est pas valide.`;
                        }
                        if (!values.objet) {
                            errors.objet = 'Ce champ est obligatoire';
                        }
                        if (!values.message) {
                            errors.message = 'Ce champ est obligatoire';
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        Inertia.post('/contact',values,{
                            preserveScroll:true
                        })
                        setSuccess('Merci pour votre message. Il a été envoyé, Nous nous assurerons que vous recevrez une réponse dans les plus brefs délais.')
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

                        <div className='mb-12'>
                            <div className='mt-5 flex'>
                                <div className="flex items-center">
                                    <input onChange={handleChange} onBlur={handleBlur} defaultChecked id="client" type="radio" value="client" name="profil" className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-0" />
                                    <label htmlFor="client" className="ml-2 text-sm font-medium text-gray-900">Client</label>
                                </div>
                                <div className="flex items-center ml-5">
                                    <input onChange={handleChange} onBlur={handleBlur} id="presse" type="radio" value="presse" name="profil" className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-0" />
                                    <label htmlFor="presse" className="ml-2 text-sm font-medium text-gray-900">Presse</label>
                                </div>
                                <div className="flex items-center ml-5">
                                    <input onChange={handleChange} onBlur={handleBlur} id="partenaire" type="radio" value="partenaire" name="profil" className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-0" />
                                    <label htmlFor="partenaire" className="ml-2 text-sm font-medium text-gray-900">Partenaire</label>
                                </div>
                                <div className="flex items-center ml-5">
                                    <input onChange={handleChange} onBlur={handleBlur} id="professionnel" type="radio" value="professionnel" name="profil" className="w-4 h-4 text-primary bg-gray-100 border-gray-300 outline-none focus:ring-0" />
                                    <label htmlFor="professionnel" className="ml-2 text-sm font-medium text-gray-900">Professionnel</label>
                                </div>
                            </div>
                            <InputError message={errors.profil} className="mt-2" />
                        </div>
                        <div>
                            <div className="grid grid-cols-2 items-center mt-5">
                                <div>
                                    <div className="relative">
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg
                                            aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0
                                            00-1.997 1.884z">
                                            </path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z">
                                            </path>
                                        </svg>
                                    </div>
                                    <input onChange={handleChange} onBlur={handleBlur} value={values.email} name="email" type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="E-mail" />
                                    </div>
                                </div>
                                <div className='ml-6 text-gray-500'>
                                    Pour nous contacter par mail
                                </div>
                                <InputError message={errors.email} className="mt-2" />
                            </div>
                            <div className="grid grid-cols-2 items-center mt-5">
                                <div>
                                    <div className="relative">
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg
                                        aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0
                                            00-1.997 1.884z">
                                            </path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z">
                                                </path>
                                        </svg>
                                    </div>
                                    <input  onChange={handleChange} onBlur={handleBlur} value={values.objet}
                                            name="objet" type="text" placeholder="Objet"
                                            id="input-group-1"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>
                                </div>
                                <div className='ml-6 text-gray-500'>
                                    Pour nous contacter par téléphone
                                </div>
                            <InputError message={errors.objet} className="mt-2" />
                            </div>
                            <div className="grid grid-cols-2 items-start mt-5">
                                <div>
                                    <div className="relative">
                                    <div className="absolute inset-y-0 top-5 right-0 flex items-start pr-3 pointer-events-none">
                                        <svg
                                        aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0
                                            00-1.997 1.884z">
                                            </path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z">
                                                </path>
                                        </svg>
                                    </div>
                                    <textarea onChange={handleChange} onBlur={handleBlur} value={values.message} placeholder="Message" name='message' id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500"></textarea>
                                    <InputError message={errors.message} className="mt-2" />
                                    </div>
                                </div>
                                <div className='ml-6 text-gray-500'>
                                    Nous nous ferons un plaisir de vous contacter et de répondre a vos questions
                                </div>
                            </div>
                            <div className="grid grid-cols-2 mt-5">
                                {success && (
                                    <h2 className='bg-black text-white p-5 text-center rounded-lg'>
                                        {success}
                                    </h2>
                                )}
                            </div>
                            <div className="grid grid-cols-2 mt-5">
                                <button className='bg-primary py-2 text-white'>
                                    Envoyer
                                </button>
                            </div>
                        </div>
                    </form>
                    )}
            </Formik>
        </div>
    </div>
  )
}

export default Form
