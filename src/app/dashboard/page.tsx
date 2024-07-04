'use client';

import React, { useState } from 'react';
import { NavBar } from "../components/navbar"

export default function Page() {
    
    return (
        <div className="flex h-screen">
            <div className="w-full">
                <NavBar />
            </div>
        </div>
    )

}