'use client';

import DisplayLottie from '@/app/components/displayLottie/DisplayLottie';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import astronautMusic from '../../assets/lotties/astronautMusic.json'
import { StyleContext } from '../../contexts/StyleContext';

export default function Greeting() {
    return (
        <div className='bg-white flex justify-between w-full pl-12 pr-12 dark:bg-slate-900'>
            <div id='left_container' className='w-56 flex flex-col'>
                <h1 className='font-bold text-2xl text-black mb-4 transition duration-500 ease-in-out hover:text-purple-800 sm:text-3xl sm:leading-snug md:text-5xl md:font-extrabold lg:font-black lg:leading-normal xl:text-6xl xl:leading-relaxed'>
                    Melos
                </h1>
                <p className='text-xs overflow-hidden max-h-12 text-gray-800 sm:max-h-full lg:text-sm xl:text-lg'>
                    hello!
                </p>
            </div>

            <div id="right_container" className="w-2/5 flex flex-col relative">
                <DisplayLottie animationData={astronautMusic} />
            </div>
        </div>
    )
}
