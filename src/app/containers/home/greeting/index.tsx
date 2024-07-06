'use client';

import DisplayLottie from '@/app/components/displayLottie/DisplayLottie';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import processAnimation from '../../../assets/lotties/processAnimation.json';
import { StyleContext } from '../../../contexts/StyleContext';;
import { SCREENS } from '@/app/utils/responsive';

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
        xl:pt-6
    `}
`;

export default function Greeting() {
    return (
        <MainContainer>
            <LeftContainer>
                <h1 className='flex justify-center items-center pt-24 text-5xl font-open font-bold text-gray-900 xl:text-8xl dark:text-white'>Melos</h1>
                <p className='flex justify-center items-center text-lg font-sans pt-6 text-gray-800 xl:text-2xl dark:text-white'>
                    Revamp your online presence with Melos!
                </p>
            </LeftContainer>

            <RightContainer>
                <LottieContainer>
                    <DisplayLottie animationData={processAnimation} />
                </LottieContainer>
            </RightContainer>
        </MainContainer>
    )
}
