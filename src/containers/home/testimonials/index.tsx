'use client';

import DisplayLottie from '@/components/displayLottie/DisplayLottie';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import designAnimation from '../../../assets/lotties/designAnimation.json';
import { StyleContext } from '../../../contexts/StyleContext';;
import { SCREENS } from '@/utils/responsive';
import emoji from 'react-easy-emoji';
import { TestimonialCard } from '@/components/card';

const MainContainer = styled.div`
    ${tw`
        w-full
        h-screen
        bg-white
        dark:bg-gray-800
        xl:flex
    `}
`;

const ContentContainer = styled.div`
    ${tw`
        xl:w-full
        xl:pt-32
    `}
`;


export default function Testimonials() {

    const testimonials = [
        {
            name: "Sarah from Avalanche",
            description: "Melos was quick and gave me the chance to put my creative add-ons to my new website.",
            tags: ["#responsive", "#communication", "#design"]
        },
        {
            name: "John from Star Barber",
            description: "They created exactly what I had in mind and allowed me to be a part of the entire process.",
            tags: ["#communication", "#friendly", "#cooperative"]
        },
        {
            name: "Rachel from Good Eats",
            description: "Needed my website built to help launch my new business. Melos helped me quickly get the ball rolling.",
            tags: ["#easy", "#quick", "#cooperative"]
        }
    ]


    return (
        <MainContainer>
            <ContentContainer>
                <h1 className='flex justify-center items-center pt-24 text-5xl font-open font-bold text-gray-900 xl:text-8xl xl:pt-0 dark:text-white'>
                    Testimonials
                </h1>  
                <div className='pt-6'>
                    <p className='flex justify-center items-center text-gray-800 xl:text-2xl dark:text-white'>
                        Hear back from our valued customers and see what they have to say about Melos!
                    </p>
                    <p className='flex justify-center items-center  text-gray-800 pt-4 xl:text-2xl dark:text-white'>
                        Worked with us before? Let others know about your experience&nbsp;<a href="/testimonial" className='text-blue-600 hover:underline dark:text-blue-300'>here</a>.
                    </p>
                </div>
                <div className='flex justify-center items-center mt-24'>
                    <TestimonialCard name={testimonials[0].name} description={testimonials[0].description} tags={testimonials[0].tags} />
                    <TestimonialCard name={testimonials[1].name} description={testimonials[1].description} tags={testimonials[1].tags} />
                    <TestimonialCard name={testimonials[2].name} description={testimonials[2].description} tags={testimonials[2].tags} />
                </div>
            </ContentContainer>
        </MainContainer>
    )
}
