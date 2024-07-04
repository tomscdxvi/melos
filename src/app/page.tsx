'use client';

import { useContext } from 'react';
import Image from "next/image";
import { NavBar } from "./components/navbar";
import { StyleContext } from './contexts/StyleContext';

export default function Home() {
  return (
    <>
      <div className="h-screen">
          <div className="w-full">
              <NavBar />
          </div>

          <div className='bg-white h-screen dark:bg-gray-800'>
            <p>hello</p>
          </div>
      </div>
    </>
  );
}
