'use client';

import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToolTip }  from '@/components/tooltip';
import emoji from 'react-easy-emoji';

const initializeError = (error : any) => {
    toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
            background: "#CDFADC",
            color: '#333333' 
        }
    }); 
}

export const Form: FC = () => {

    const timeout = (delay : number) => {
        return new Promise(res => setTimeout(res, delay));
    }

    const [values, setValues] = useState({
        name: "",
        company: "",
        message: ""
    });

    const onChangeHandler = (event : ChangeEvent<any>) : void => {

        setValues({...values, [event.target.name] : event.target.value });
    }

    const sendForm = async(event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        try {
            await toast.promise(
                async() => {
                    // await timeout(2000);

                    await axios.post("/api/testimonial", {
                        name: values.name,
                        company: values.company,
                        message: values.message
                    })
                },
                {
                    pending: "Creating testimonial...",
                    success: "Your testimonial has been saved and will be reviewed shortly!",
                    error: "An error has occurred and your testimonial could not be saved."
                },
                {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                }
            );
        } catch(error) {
            initializeError(error);
        }
    }

    console.log(values);

    return (
        <section className="bg-white xl:h-screen xl:pt-32 dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Testimonial <span className='text-red-600'>(WIP)</span>
                </h2>
                <div className='flex justify-center items-center'>
                    <p className="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        Let others know about your experience with us! 
                    </p> 
                    <div className='mt-1'>
                        <ToolTip message={emoji("💡")} content="If you would like to keep it private, notify us in your message." />
                    </div>
                </div>
                <form onSubmit={sendForm} className="space-y-8">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                        <input type="text" name="name" id="name" onChange={onChangeHandler} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John" required />
                    </div>
                    <div>
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Name</label>
                        <input type="text" name="company" id="company" onChange={onChangeHandler} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Melos" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" name="message" onChange={onChangeHandler} rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" disabled className="disabled:opacity-50 disabled:cursor-not-allowed py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-900 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-white dark:text-gray-900 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Send message
                    </button>
                </form>
            </div>
        </section>
    )
}
