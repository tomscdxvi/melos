'use client';

import DisplayLottie from '@/app/components/displayLottie/DisplayLottie';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import processAnimation from '../../assets/lotties/processAnimation.json';
import { StyleContext } from '../../contexts/StyleContext';;
import { SCREENS } from '@/app/utils/responsive';

const TopSectionContainer = styled.div`
    ${tw`
        h-screen
        w-screen
        bg-white
        dark:bg-gray-800
    `}
`;

const LeftContainer = styled.div`
    ${tw`
 
    `}
`;

const RightContainer = styled.div`
    ${tw`
        flex
        justify-center
        items-center
    `}
`;


const LottieContainer = styled.div`
    ${tw`
        pt-12
        w-5/6
    `}
`;

export default function Greeting() {
    return (
        <TopSectionContainer>
            <LeftContainer>
                <h1 className='flex justify-center items-center pt-24 text-5xl font-open font-bold text-gray-900 dark:text-white'>Melos</h1>
                <p className='flex justify-center items-center text-lg font-sans pt-6 text-gray-800 dark:text-white'>
                    Revamp your online presence with Melos!
                </p>
            </LeftContainer>

            <RightContainer>
                <LottieContainer>
                    <DisplayLottie animationData={processAnimation} />
                </LottieContainer>
            </RightContainer>
        </TopSectionContainer>
    )
}
