'use client';

import { useContext } from 'react';
import Image from "next/image";
import { NavBar } from "./components/navbar";
import { StyleContext } from './contexts/StyleContext';
import Greeting from './containers/home/greeting';
import WorkWithUs from './containers/home/work-with-us';
import Testimonials from './containers/home/testimonials';
import Footer from './components/footer';

export default function Home() {
  return (
        <>
            <div className="h-screen">
                <div className="w-full">
                    <NavBar />
                </div>

                <Greeting />
                <WorkWithUs />
                <Testimonials />
                <Footer />
            </div>
        </>
    );
}
