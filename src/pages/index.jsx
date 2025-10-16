import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/navbar';
import Home from '../components/home';
import Experience from '../components/experience';
import WhyHireMe from '../components/whyHireMe';
import TechnicalSkills from '../components/technicalSkills';
import bg from '../assets/bg.jpg'
import ServicesSection from '../components/myServices';
import Blogs from '../components/blogs';
import Email from '../components/email';
import Footer from '../components/footer';
import Cookie from '../assets/cookie.png';
import CookieAnimationSection from '../components/CookieAnimationSection';

function Index() {

    return (
        <div className='max-w-[1540px] mx-auto '>

            <div className='w-full px-4 mx-auto'>
                <Navbar />
                <Home />
                <Experience />
            </div>
            <div className='bg-[#F2F4F7]'>
                <div className='w-full px-4 mx-auto '>
                    <WhyHireMe />
                </div>
            </div>
            <div className='bg-[#1D283A]'>
                <div className='w-full px-4 mx-auto '>
                    <TechnicalSkills />
                </div>
            </div>
            <CookieAnimationSection bg={bg} />

            <div className='w-full px-4 mx-auto'>
                <Blogs />
                <Email />
            </div>
            <div className='bg-[#1E1E1E]'>
                <div className='w-full px-4 mx-auto '>
                    <Footer />
                </div>
            </div>
        </div>

    )
}

export default Index;
