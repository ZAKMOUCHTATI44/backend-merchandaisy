import React, { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import App from "@/Layouts/App";
import Logo from "../../../images/logo.png";

import { Formik } from "formik";
import { Inertia } from "@inertiajs/inertia";
import axios from "axios";

export default function Login(props) {
    // const submit = (e) => {
    //     e.preventDefault();
    //     post(route('login'));
    // };
    console.log(props.errors);

    return (
        <>
            <Head title="Log in" />
            <div className="grid grid-cols-2 gap-5 h-screen items-center">
                <div className="w-full px-12">
                    <div className="flex justify-center">
                        <img
                            src="https://www.merchandisy.com/_next/image?url=%2Flogo.png&w=384&q=75"
                            alt=""
                        />
                    </div>
                    <Formik
                        validateOnChange={false}
                        validateOnBlur={false}
                        initialValues={{ email: "", password: "" }}
                        validate={(values) => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = "Ce champ est obligatoire";
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                    values.email
                                )
                            ) {
                                errors.email = `L'email n'est pas valide.`;
                            }
                            if (!values.password) {
                                errors.password = "Ce champ est obligatoire";
                            }

                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            Inertia.post("/login", values, {
                                replace: true,
                            });
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
                                <div className="mt-4">
                                    <InputLabel
                                        forInput="email"
                                        value="Email"
                                    />
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
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                    <InputError
                                        message={props.errors.email}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        forInput="password"
                                        value="Mot de passe"
                                    />
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
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="flex items-center justify-between mt-5">
                                    <label className="flex items-center">
                                        <Checkbox name="remember" />
                                        <span className="ml-2 text-sm text-gray-600 focus:ring-none">
                                            Mémoriser mes informations
                                        </span>
                                    </label>
                                </div>

                                <button className="bg-primary w-full py-2 mt-5 text-white">
                                    Se connecter
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
                <div
                    className="w-full h-full bg-no-repeat"
                    style={{
                        backgroundImage: "url('/login-4a120261.svg')",
                    }}
                ></div>
            </div>
        </>
    );
}
