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

const CookieAnimationSection = ({ bg }) => {
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="relative">
            {/* Background Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bg})` }}
            />
            <div
                className="relative group overflow-hidden"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            >
                {/* Duplicate Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bg})` }}
                />

                {/* Cookie 1 */}
                <img
                    src={Cookie}
                    alt="Cookie 1"
                    className={`absolute z-10 w-[5%] top-[30%] left-[20%] transform -translate-x-1/2 -translate-y-1/2
                        transition-transform duration-700 ease-in-out
                        ${inView ? "animate-random-move" : ""}
                        ${hovering ? "animate-hover-fast" : ""}
                    `}
                />

                {/* Cookie 2 */}
                <img
                    src={Cookie}
                    alt="Cookie 2"
                    className={`absolute z-10 w-[10%] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2
                        transition-transform duration-700 ease-in-out
                        ${inView ? "animate-random-move-slow" : ""}
                        ${hovering ? "animate-hover-fast" : ""}
                    `}
                />

                {/* Cookie 3 */}
                <img
                    src={Cookie}
                    alt="Cookie 3"
                    className={`absolute z-10 w-[20%] -bottom-50 -right-50 transform -translate-x-1/2 -translate-y-1/2
                        transition-transform duration-700 ease-in-out
                        ${inView ? "animate-random-move" : ""}
                        ${hovering ? "animate-hover-fast" : ""}
                    `}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 backdrop-blur-xs" />

                {/* Content */}
                <div className="relative z-10 w-[80%] mx-auto">
                    <ServicesSection />
                </div>
            </div>
        </div>
    );
};

function Index() {

    return (
        <div className='max-w-[1540px] mx-auto'>
            <div className='w-[80%] mx-auto '>
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
           <CookieAnimationSection bg={bg}/>

            <div className='w-[80%] mx-auto'>
                <Blogs />
                <Email />
            </div>
            <div className='bg-[#1E1E1E]'>
                <div className='w-[80%] mx-auto '>
                    <Footer />
                </div>
            </div>

        </div>

    )
}

export default Index;
