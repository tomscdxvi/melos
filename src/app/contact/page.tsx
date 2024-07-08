import React, { useState } from 'react';
import { NavBar } from "../../components/navbar";
import Footer from '../../components/footer';
import { Form } from '../../containers/contact/form';

export default function Page() {
    
    return (
        <div className="h-screen">
            <div className="w-full">
                <NavBar />
            </div>

            <Form />
            <Footer />
        </div>
    )

}