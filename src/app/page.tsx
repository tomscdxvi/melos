'use client';

import { useContext } from 'react';
import Image from "next/image";
import { NavBar } from "./components/navbar";
import { StyleContext } from './contexts/StyleContext';
import Greeting from './containers/greeting';

export default function Home() {
  return (
    <>
        <div className="h-screen">
            <div className="w-full">
                <NavBar />
            </div>

                <Greeting />
            </div>
        </>
    );
}
