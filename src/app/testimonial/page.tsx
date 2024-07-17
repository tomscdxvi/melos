'use client';

import React, { useState } from 'react';
import { NavBar } from "../../components/navbar";
import { Form } from '@/containers/testimonial/form';

export default function Page() {
    
    return (
        <div className="h-screen bg-white">
            <div className="w-full">
                <NavBar />
            </div>

            <div className='dark:bg-gray-800'>
                <Form />
            </div>
        </div>
    )

}