import React from 'react'
import Navbar from '../components/navbar';
import Home from '../components/home';
import Experience from '../components/experience';
import WhyHireMe from '../components/whyHireMe';
import TechnicalSkills from '../components/technicalSkills';
import bg from '../assets/bg.jpg'
import ServicesSection from '../components/myServices';

function Index() {


    return (
        <>
            <div className='w-[80%] mx-auto'>
                <Navbar />
                <Home />
                <Experience />

            </div>
            <div className='bg-[#F2F4F7]'>
                <div className='w-[80%] mx-auto '>
                    <WhyHireMe />
                </div>
            </div>
            <div className='bg-[#1D283A]'>
                <div className='w-[80%] mx-auto '>
                    <TechnicalSkills />
                </div>
            </div>
            <div className="relative">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bg})` }}
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />

                <div className="relative z-10 w-[80%] mx-auto">
                    <ServicesSection />
                </div>
            </div>


        </>

    )
}

export default Index;
