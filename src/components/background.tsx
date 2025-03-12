"use client";

import React from 'react'
import Lottie from 'lottie-react'
import bgAnimation from "@/assets/background/bg-logo.json";

export default function Background() {
  return (
    <Lottie animationData={bgAnimation} loop={true} className='opacity-20 absolute inset-0'/>
  )
}