'use client';

import DisplayLottie from '@/components/displayLottie/DisplayLottie';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import designAnimation from '../../../assets/lotties/designAnimation.json';
import { StyleContext } from '../../../contexts/StyleContext';;
import { SCREENS } from '@/utils/responsive';
import emoji from 'react-easy-emoji';

const MainContainer = styled.div`
    ${tw`
        w-full
        h-screen
        bg-white
        dark:bg-gray-800
        xl:flex
        xl:justify-between
    `}
`;

const LeftContainer = styled.div`
    ${tw`
        xl:w-1/2
        xl:flex
        xl:flex-col
        xl:pt-72
    `}
`;

const RightContainer = styled.div`
    ${tw`
        flex
        justify-center
        items-center
        xl:w-1/2
        xl:flex
        xl:flex-col
        xl:relative
    `}
`;


const LottieContainer = styled.div`
    ${tw`
        pt-12
        w-5/6
        xl:w-1/2
        xl:ml-64
        xl:pt-0
    `}
`;

export default function WorkWithUs() {
    return (
        <MainContainer>
            <LeftContainer>
                <LottieContainer>
                    <DisplayLottie animationData={designAnimation} />
                </LottieContainer>
                
            </LeftContainer>

            <RightContainer>
                <h1 className='flex justify-center items-center pt-24 text-5xl font-open font-bold text-gray-900 xl:text-8xl xl:pt-0 dark:text-white'>
                    Why Work With Us?
                </h1>
                <p className='flex justify-center items-center text-lg font-sans pt-6 text-gray-800 xl:text-2xl xl:w-3/4 dark:text-white'>
                    Online presence is an important part of a growing business and we want to help you scale your company!
                </p>
                <ul className='text-lg font-sans text-gray-800 xl:text-2xl xl:w-3/4 xl:mt-6 dark:text-white'>
                    <li className='flex mb-2'>
                        <span className='mt-1.5 mr-2'>{emoji("🚀")}</span>
                        <p>Boost the chances of reaching new customers</p>
                    </li>
                    <li className='flex mb-2'>
                        <span className='mt-1.5 mr-2'>{emoji("🌟")}</span>
                        <p>Keep your website up-to-date with modern designs and technology</p>
                    </li>
                    <li className='flex mb-2'>
                        <span className='mt-1.5 mr-2'>{emoji("⚡")}</span>
                        <p>We are not a big corporation so we can quickly respond and cater to your business needs</p>
                    </li>
                </ul>
            </RightContainer>
        </MainContainer>
    )
}
