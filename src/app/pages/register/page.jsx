"use client"
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import LogIn from '../login/page';
import { useForm } from 'react-hook-form';
import { AuthContext } from '@/app/share/AuthProvider';
import { useRouter } from 'next/navigation';


const Register = () => {
    const { user, createUser } = useContext(AuthContext);
    console.log(user);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [state, setState] = useState("login");
    const router = useRouter()
    const [show, setShow] = useState({
        p1: false,
        p2: false
    });


    const handleRegisterAtion = (data) => {
        const { username, password, email, } = (data);
        createUser(email, password)
            .then(data => {
                const user = data.user
                // logOut();
                alert('Create Account successFully')
                reset();
                router.push('/')
                console.log(user);

            })
            .catch(error => {
                // const errorMessage = error
                console.log(error.message);
            })
        console.log(username, email, password);

    }

    return (
        <section className="-mt-32 ">
            <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                <div className="w-full max-w-md">

                    <div className="flex items-center justify-center mt-6 duration-300">


                        <button className={`w-1/3 pb-4 duration-200 ease-linear  transition-all font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 `}>
                            sign up
                        </button>
                    </div>


                    <form onSubmit={handleSubmit(handleRegisterAtion)} >


                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>

                            <input type="text" className={`block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40
                        ${errors.username && 'border border-red-800'}
                        `} placeholder="Username" name="username" required
                                {...register("username", { required: "username is required" })}
                            />
                        </div>
                        {errors.username && <p className="text-error font-medium">{errors.username}</p>}


                        <div className="relative flex items-center mt-6">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                            <input type="email" className={`block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40`} placeholder="Email address" name="email" required
                                {...register("email", { required: "email is required" })}

                            />
                        </div>
                        {errors.email && <p className="text-error font-medium">⚠ Please provide valid email address</p>}

                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>

                            <input type={show.p1 ? "text" : "password"} className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" name="password"
                                {...register("password", {
                                    required: "You must specify a password",
                                    minLength: {
                                        value: 8,
                                        message: "Password must have at least 8 characters"
                                    },
                                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                                })}
                            />
                            {show.p1 ? <AiFillEye className="absolute right-2 text-gray-600" onClick={() => {
                                setShow({ ...show, p1: !show.p1 })
                                console.log(show)
                            }
                            } />

                                : <AiFillEyeInvisible className="absolute right-2 text-gray-600" onClick={() => {
                                    setShow({ ...show, p1: !show.p1 })
                                    console.log(show)
                                }} />}
                        </div>
                        {errors.password && <>
                            <p className="text-error">⚠ Please provide strong Password</p>
                            <p className="text-red-600 text-base">🎇TIP: min6, max-15 including lowercase,uppercase,special character</p>
                        </>}



                        <div className="mt-6">

                            <div
                                className="inline-block text-center  w-full rounded border border-current px-8 py-3 uppercase font-serif text-xl text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"

                            >
                                sign up
                            </div>

                            <div className="mt-6 text-center ">
                                <Link href="/pages/login" className="text-lg font-serif text-blue-500 hover:underline dark:text-blue-400">
                                    Already have an account?
                                </Link>
                            </div>
                        </div>

                    </form>



                </div>
            </div>
        </section>
    );
};

export default Register;